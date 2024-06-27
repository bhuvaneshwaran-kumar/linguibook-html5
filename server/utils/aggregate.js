const getVoc = (contextId, from, size, userId) => {
  return [
    {
      $match: {
        contextId: contextId
      }
    },
    { $skip: from },
    { $limit: size },
    {
      $project: {
        _id: { $toString: "$_id" }, // Convert ObjectId to string
        term: 1,
        meaning: 1,
        relmEg: 1,
        likesCount: {
          $cond: {
            if: { $isArray: "$likes" },
            then: { $size: "$likes" },
            else: 0
          }
        },
        isLiked: {
          $cond: {
            if: { $isArray: "$likes" },
            then: { $in: [userId, "$likes"] }, // Replace "<userId>" with the user ID you want to check
            else: false
          }
        },
        commentsCount: {
          $cond: {
            if: { $isArray: "$comments" },
            then: { $size: "$comments" },
            else: 0
          }
        },
        comments: {
          $cond: {
            if: { $isArray: "$comments" },
            then: { $slice: ["$comments", 5] },
            else: []
          }
        },
      }
    },
    {
      $group: {
        _id: null,
        voc_id: {
          $push: {
            k: "$_id",
            v: {
              term: "$term",
              meaning: "$meaning",
              relmEg: "$relmEg",
              likesCount: "$likesCount",
              isLiked: "$isLiked",
              commentsCount: "$commentsCount",
              comments: "$comments"
            }
          }
        }
      }
    },
    {
      $addFields: {
        voc_id: {
          $map: {
            input: "$voc_id",
            as: "item",
            in: {
              k: "$$item.k", // Preserve the key field
              v: {
                $mergeObjects: [
                  "$$item.v", // Preserve the value field
                  { index: { $add: [{ $indexOfArray: ["$voc_id", "$$item"] }, 1] } }
                ]
              }
            }
          }
        }
      }
    },
    {
      $replaceRoot: {
        newRoot: { $arrayToObject: "$voc_id" }
      }
    }
  ]
}

const ctxtAggregate = [
  {
      $group: {
          _id: null,
          keyValueArray: { $push: { k: { $toString: '$_id' }, v: '$value' } }
      }
  },
  {
      $addFields: {
          keyValueArray: {
              $map: {
                  input: "$keyValueArray",
                  as: "item",
                  in: {
                      k: "$$item.k",
                      v: {
                          index: { $add: [{ $indexOfArray: ["$keyValueArray", "$$item"] }, 1] },
                          value: "$$item.v"
                      }
                  }
              }
          }
      }
  },
  {
      $replaceRoot: {
          newRoot: { $arrayToObject: '$keyValueArray' }
      }
  }
];

module.exports = { getVoc, ctxtAggregate }