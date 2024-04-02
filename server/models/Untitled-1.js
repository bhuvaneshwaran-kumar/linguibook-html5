// Define an array of 100 context documents
const contexts = [
    { value: 'law' }, 
    { value: 'school' }, 
    { value: 'teaching' }, 
    { value: 'work' }, 
    { value: 'family' }, 
    { value: 'friendship' }, 
    { value: 'health' }, 
    { value: 'fitness' }, 
    { value: 'cooking' }, 
    { value: 'travel' }, 
    { value: 'art' }, 
    { value: 'music' }, 
    { value: 'writing' }, 
    { value: 'programming' }, 
    { value: 'gardening' }, 
    { value: 'pets' }, 
    { value: 'environment' }, 
    { value: 'politics' }, 
    { value: 'finance' }, 
    { value: 'shopping' }, 
    { value: 'technology' }, 
    { value: 'business' }, 
    { value: 'career' }, 
    { value: 'hobbies' }, 
    { value: 'socializing' }, 
    { value: 'education' }, 
    { value: 'research' }, 
    { value: 'entertainment' }, 
    { value: 'science' }, 
    { value: 'history' }, 
    { value: 'creativity' }, 
    { value: 'innovation' }, 
    { value: 'communication' }, 
    { value: 'language' }, 
    { value: 'philosophy' }, 
    { value: 'religion' }, 
    { value: 'spirituality' }, 
    { value: 'nature' }, 
    { value: 'architecture' }, 
    { value: 'engineering' }, 
    { value: 'medicine' }, 
    { value: 'psychology' }, 
    { value: 'sociology' }, 
    { value: 'anthropology' }, 
    { value: 'biology' }, 
    { value: 'chemistry' }, 
    { value: 'physics' }, 
    { value: 'astronomy' }, 
    { value: 'geography' }, 
    { value: 'geology' }, 
    { value: 'mathematics' }, 
    { value: 'statistics' }, 
    { value: 'economics' }, 
    { value: 'marketing' }, 
    { value: 'advertising' }, 
    { value: 'public relations' }, 
    { value: 'journalism' }, 
    { value: 'media' }, 
    { value: 'film' }, 
    { value: 'television' }, 
    { value: 'digital media' }, 
    { value: 'social media' }, 
    { value: 'networking' }, 
    { value: 'cybersecurity' }, 
    { value: 'data science' }, 
    { value: 'machine learning' }, 
    { value: 'artificial intelligence' }, 
    { value: 'robotics' }, 
    { value: 'virtual reality' }, 
    { value: 'augmented reality' }, 
    { value: 'blockchain' }, 
    { value: 'cryptocurrency' }, 
    { value: 'fintech' }, 
    { value: 'ecommerce' }, 
    { value: 'startup' }, 
    { value: 'venture capital' }, 
    { value: 'angel investing' }, 
    { value: 'crowdfunding' }, 
    { value: 'mergers and acquisitions' }, 
    { value: 'business strategy' }, 
    { value: 'leadership' }, 
    { value: 'management' }, 
    { value: 'productivity' }, 
    { value: 'time management' }, 
    { value: 'stress management' }, 
    { value: 'self-improvement' }, 
    { value: 'personal development' }, 
    { value: 'goal setting' }, 
    { value: 'motivation' }, 
    { value: 'mindfulness' }, 
    { value: 'meditation' }, 
    { value: 'yoga' }, 
    { value: 'pilates' }, 
    { value: 'aerobics' }, 
    { value: 'strength training' }, 
    { value: 'cardio' }, 
    { value: 'HIIT' }, 
    { value: 'cycling' }, 
    { value: 'running' }, 
    { value: 'swimming' }
];

/** @Note an aggregate function to get in { '660a1d4e2cbdfdb40bd14a66': 'medicine', '660a1d4e2cbdfdb40bd14a67': 'psychology',}
 db.context.aggregate([
  {
    $group: {
      _id: null,
      keyValueArray: { $push: { k: { $toString: '$_id' }, v: '$value' } }
    }
  },
  {
    $replaceRoot: {
      newRoot: { $arrayToObject: '$keyValueArray' }
    }
  }
])
 */

db.context.insertMany(contexts);

const legalTerm = [
    {
      "term": "Admissible",
      "meaning": "Evidence that is allowed to be presented in court.",
      "relmEg": "The judge ruled the documents inadmissible due to lack of authentication.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Affidavit",
      "meaning": "A written statement confirmed by oath or affirmation, typically for use as evidence in court.",
      "relmEg": "The witness signed an affidavit attesting to the accuracy of the document.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Affirmation",
      "meaning": "A solemn declaration made under penalties of perjury, but without an oath, such as a sworn statement.",
      "relmEg": "Quakers may affirm rather than take an oath in court.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Allegation",
      "meaning": "A claim or assertion that someone has done something illegal or wrong, typically without proof.",
      "relmEg": "The allegations of fraud led to a thorough investigation.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Amicus Curiae",
      "meaning": "A person or organization not a party to a particular litigation who submits a brief or participates in an argument in that litigation.",
      "relmEg": "The civil rights organization filed an amicus curiae brief in support of the plaintiff.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Appeal",
      "meaning": "A request made to a higher court to review a decision made by a lower court.",
      "relmEg": "The defendant plans to appeal the judgment handed down by the district court.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Arbitration",
      "meaning": "The use of an arbitrator to settle a dispute.",
      "relmEg": "The parties agreed to resolve their dispute through arbitration rather than litigation.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Arraignment",
      "meaning": "A formal reading of a criminal charge and the defendant's response to that charge.",
      "relmEg": "The defendant entered a plea of not guilty at his arraignment.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Bail",
      "meaning": "The temporary release of an accused person awaiting trial, sometimes with a monetary guarantee.",
      "relmEg": "The judge set bail at $10,000 for the defendant.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Bailiff",
      "meaning": "An officer of the court who is responsible for keeping order in the courtroom and securing jurors, witnesses, and prisoners.",
      "relmEg": "The bailiff swore in the jury before the trial began.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Bench Trial",
      "meaning": "A trial by judge without a jury.",
      "relmEg": "The defendant opted for a bench trial rather than a jury trial.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Bench Warrant",
      "meaning": "A written order issued by a judge authorizing law enforcement to arrest the person named in the warrant.",
      "relmEg": "The judge issued a bench warrant for the defendant's arrest after he failed to appear in court.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Brief",
      "meaning": "A written statement submitted to a court by a party in a legal case.",
      "relmEg": "The attorney prepared a brief arguing for the reversal of the lower court's decision.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Civil",
      "meaning": "Relating to private rights and remedies sought by civil actions as contrasted with criminal proceedings.",
      "relmEg": "The dispute between the neighbors was resolved through civil litigation.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Class Action",
      "meaning": "A lawsuit brought by a group of people who have been similarly harmed.",
      "relmEg": "The lawsuit was filed as a class action on behalf of all affected consumers.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Clemency",
      "meaning": "Mercy or leniency granted to an offender by a person or authority.",
      "relmEg": "The governor granted clemency to several prisoners on death row.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Constructive Trust",
      "meaning": "A trust imposed by law to avoid injustice, regardless of the intentions of the parties.",
      "relmEg": "The court imposed a constructive trust to prevent unjust enrichment.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Contempt of Court",
      "meaning": "Willful disobedience to or disrespect for the authority of a court.",
      "relmEg": "The defendant was held in contempt of court for refusing to comply with the judge's order.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Court of Appeals",
      "meaning": "A court that hears appeals from lower courts.",
      "relmEg": "The decision of the district court was appealed to the Court of Appeals.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Court Reporter",
      "meaning": "A person who transcribes spoken or recorded speech into written form, typically in a legal proceeding.",
      "relmEg": "The court reporter transcribed every word spoken during the trial.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Creditor",
      "meaning": "A person or company to whom money is owed.",
      "relmEg": "The bank is the primary creditor of the debtor.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Criminal",
      "meaning": "Relating to crimes and their punishment.",
      "relmEg": "The defendant was charged with criminal negligence.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Cross-examination",
      "meaning": "The questioning of a witness by the opposing party during a trial.",
      "relmEg": "The defense attorney conducted a thorough cross-examination of the prosecution's witness.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Damages",
      "meaning": "Money awarded to a plaintiff in compensation for loss or injury.",
      "relmEg": "The plaintiff was awarded $100,000 in damages for medical expenses and pain and suffering.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Debtor",
      "meaning": "A person or institution that owes a sum of money.",
      "relmEg": "The debtor filed for bankruptcy to discharge his debts.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Deed",
      "meaning": "A legal document that conveys title to real property.",
      "relmEg": "The deed to the house was transferred to the new owner.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Defendant",
      "meaning": "The party against whom a lawsuit is brought.",
      "relmEg": "ABC Inc. is the defendant in the lawsuit filed by Mary Smith.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Discovery",
      "meaning": "The pre-trial process of gathering evidence and information.",
      "relmEg": "During discovery, both parties exchange relevant documents and information.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Docket",
      "meaning": "A calendar or list of cases for trial or people having cases pending.",
      "relmEg": "The case was added to the court's docket for next month.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Double Jeopardy",
      "meaning": "The prosecution of a person twice for the same offense.",
      "relmEg": "The defendant successfully argued that trying him again would constitute double jeopardy.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Due Process",
      "meaning": "The legal requirement that the government must respect all legal rights owed to a person.",
      "relmEg": "Ensuring that all individuals have the right to a fair trial is part of due process.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Embezzlement",
      "meaning": "Theft or misappropriation of funds placed in one's trust or belonging to one's employer.",
      "relmEg": "The accountant was arrested for embezzlement of company funds.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Eminent Domain",
      "meaning": "The right of a government or its agent to expropriate private property for public use, with payment of compensation.",
      "relmEg": "The city invoked eminent domain to acquire land for a new highway.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Equity",
      "meaning": "Fairness or justice in the way people are treated.",
      "relmEg": "The judge ruled in favor of equity and ordered the parties to split the assets evenly.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Estoppel",
      "meaning": "A legal principle that bars a person from asserting a claim or right that contradicts what they have previously said or done.",
      "relmEg": "The defendant was estopped from denying liability due to his previous admissions.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Evidence",
      "meaning": "Any type of proof presented at a trial through witnesses, records, documents, etc.",
      "relmEg": "The DNA evidence presented in court proved crucial in solving the case.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Ex Parte",
      "meaning": "A legal proceeding brought by one person in the absence of and without representation or notification of other parties.",
      "relmEg": "The judge granted the temporary restraining order ex parte.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Extradition",
      "meaning": "The legal process by which a fugitive from justice in one state is returned to that state.",
      "relmEg": "The governor approved the extradition of the suspect to face charges in another state.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Felony",
      "meaning": "A serious crime, typically punishable by imprisonment for more than one year or by death.",
      "relmEg": "Arson is considered a felony offense.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Garnishment",
      "meaning": "A legal process whereby a creditor seizes a portion of a debtor's assets, such as wages, bank accounts, or other financial assets.",
      "relmEg": "The court ordered garnishment of the defendant's wages to satisfy the judgment.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Guardian ad Litem",
      "meaning": "A person appointed by a court to represent a minor or incapacitated person in legal proceedings.",
      "relmEg": "The court appointed a guardian ad litem to represent the interests of the child.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Guardianship",
      "meaning": "The legal right and duty to care for another person or manage their property.",
      "relmEg": "The court appointed a guardian to oversee the affairs of the incapacitated individual.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Guardianship",
      "meaning": "The legal authority to make decisions on behalf of another person, especially in relation to their health and welfare.",
      "relmEg": "The court appointed a legal guardian for the elderly woman.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Hearsay",
      "meaning": "Evidence presented by a witness who did not see or hear the incident in question but heard about it from someone else.",
      "relmEg": "The judge excluded the witness's testimony as hearsay.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Impeachment",
      "meaning": "The process by which a legislative body formally levels charges against a high official of government.",
      "relmEg": "The president faced impeachment for alleged misconduct.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "In Camera",
      "meaning": "In private; in chambers.",
      "relmEg": "The judge conducted the hearing in camera to protect sensitive information.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "In loco parentis",
      "meaning": "In place of a parent.",
      "relmEg": "The teacher acted in loco parentis during the field trip.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Inadmissible",
      "meaning": "Evidence that cannot be presented in court.",
      "relmEg": "The attorney objected, stating that the evidence was inadmissible hearsay.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Indemnity",
      "meaning": "Security or protection against a loss or other financial burden.",
      "relmEg": "The insurance policy provided indemnity against liability claims.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Indictment",
      "meaning": "A formal charge or accusation of a serious crime.",
      "relmEg": "The grand jury returned an indictment against the suspect.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Injunction",
      "meaning": "A court order requiring a person to do or refrain from doing a specific act.",
      "relmEg": "The judge issued an injunction preventing the company from selling its product.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Innocence Project",
      "meaning": "An organization dedicated to exonerating wrongfully convicted individuals through DNA testing and other methods.",
      "relmEg": "The Innocence Project helped overturn the wrongful conviction of an innocent man.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Innocent Until Proven Guilty",
      "meaning": "The principle that a defendant is considered innocent unless proven guilty beyond a reasonable doubt.",
      "relmEg": "In the eyes of the law, everyone is presumed innocent until proven guilty.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Interpleader",
      "meaning": "A legal action that allows a third party to resolve claims against property held by that third party.",
      "relmEg": "The stakeholder filed an interpleader action to resolve competing claims to the funds.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Interrogatories",
      "meaning": "A formal set of written questions propounded by one litigant and required to be answered by an adversary in order to clarify matters of fact and help determine in advance what facts will be presented at any trial in the case.",
      "relmEg": "The plaintiff's attorney submitted interrogatories to the defendant.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Joinder",
      "meaning": "The joining of parties as plaintiffs or defendants in a legal action.",
      "relmEg": "The court granted joinder of additional defendants in the lawsuit.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Jurisdiction",
      "meaning": "The authority of a court to hear and decide a case.",
      "relmEg": "A federal court has jurisdiction over cases involving federal laws.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Legal Aid",
      "meaning": "Professional legal services available to individuals who cannot afford to pay for them.",
      "relmEg": "The defendant received legal aid for representation in court.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Liability",
      "meaning": "The state of being legally responsible for something, such as a debt or obligation.",
      "relmEg": "The company accepted liability for the accident caused by its employee.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Liable",
      "meaning": "Legally responsible or obligated.",
      "relmEg": "The company was found liable for the damages caused by its product.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Libel",
      "meaning": "A published false statement that is damaging to a person's reputation.",
      "relmEg": "The newspaper was sued for libel after publishing defamatory statements about the politician.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Lien",
      "meaning": "A legal claim on assets which allows the holder to obtain access to the assets if debts are not paid.",
      "relmEg": "The contractor placed a lien on the property for unpaid construction costs.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Mediation",
      "meaning": "A form of alternative dispute resolution in which a neutral third party assists the disputing parties in reaching a mutually acceptable resolution.",
      "relmEg": "The couple opted for mediation to resolve their divorce issues amicably.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Miranda Rights",
      "meaning": "The rights of a person taken into custody to remain silent and to have an attorney present during questioning.",
      "relmEg": "The police officer read the suspect their Miranda Rights upon arrest.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Misdemeanor",
      "meaning": "A minor wrongdoing or offense.",
      "relmEg": "Shoplifting is considered a misdemeanor offense.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Mitigating Circumstances",
      "meaning": "Factors that do not constitute a justification or excuse for an offense but may reduce the severity of the punishment.",
      "relmEg": "The defendant's difficult upbringing was considered as mitigating circumstances during sentencing.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Natural Law",
      "meaning": "A body of unchanging moral principles regarded as a basis for all human conduct.",
      "relmEg": "The philosopher argued that natural law dictates certain fundamental rights.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Not Guilty by Reason of Insanity",
      "meaning": "A plea or verdict in a criminal trial asserting that the defendant was not responsible for their actions due to mental illness.",
      "relmEg": "The defendant was found not guilty by reason of insanity.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Notary Public",
      "meaning": "A public officer authorized to attest to the authenticity of signatures and certify documents.",
      "relmEg": "The contract was signed in the presence of a notary public.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Oath",
      "meaning": "A solemn promise, often invoking a divine witness, regarding one's future action or behavior.",
      "relmEg": "The witness took an oath to tell the truth before testifying.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Pardon",
      "meaning": "The action of forgiving or being forgiven for an error or offense.",
      "relmEg": "The president granted a pardon to the political prisoner.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Parole",
      "meaning": "The release of a prisoner before the completion of a sentence, subject to certain conditions.",
      "relmEg": "The inmate was granted parole after serving half of his sentence.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Pecuniary",
      "meaning": "Relating to or consisting of money.",
      "relmEg": "The plaintiff sought pecuniary damages for the financial losses incurred.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Perjury",
      "meaning": "The offense of willfully telling an untruth in a court after having taken an oath or affirmation.",
      "relmEg": "The witness was charged with perjury after lying under oath.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Plaintiff",
      "meaning": "The party who initiates a lawsuit.",
      "relmEg": "John Doe is the plaintiff in the case against XYZ Corporation.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Plea Bargain",
      "meaning": "An agreement in a criminal case between the prosecutor and defendant whereby the defendant agrees to plead guilty to a lesser charge in exchange for a more lenient sentence.",
      "relmEg": "The defendant accepted a plea bargain to avoid a trial.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Precedent",
      "meaning": "A legal decision or form of proceeding serving as an authoritative rule or pattern in future similar or analogous cases.",
      "relmEg": "The court's ruling set a precedent for future discrimination cases.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Preliminary Hearing",
      "meaning": "A proceeding before a judge to determine whether there is sufficient evidence to proceed to trial.",
      "relmEg": "The defendant waived his right to a preliminary hearing.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Pro Se",
      "meaning": "Representing oneself in a court proceeding without the assistance of a lawyer.",
      "relmEg": "The defendant chose to proceed pro se rather than hire an attorney.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Probable Cause",
      "meaning": "Reasonable grounds for making a search, pressing a charge, etc.",
      "relmEg": "The police had probable cause to arrest the suspect.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Probate",
      "meaning": "The official proving of a will.",
      "relmEg": "The estate is currently going through the probate process.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Probation",
      "meaning": "The release of an offender from detention, subject to a period of good behavior under supervision.",
      "relmEg": "The judge sentenced the defendant to three years of probation.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Quantum Meruit",
      "meaning": "A legal principle that allows for the recovery of the reasonable value of services rendered.",
      "relmEg": "The contractor sued for quantum meruit after the client failed to pay for the completed work.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Qui Tam",
      "meaning": "A lawsuit filed by a private citizen on behalf of the government alleging that the defendant has defrauded the government.",
      "relmEg": "The whistleblower filed a qui tam lawsuit against the company for fraudulent billing practices.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Rebuttal",
      "meaning": "Evidence presented to contradict or nullify other evidence that has been presented by an adverse party.",
      "relmEg": "The attorney presented a strong rebuttal to the witness's testimony.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Restitution",
      "meaning": "Compensation or repayment for a loss or injury.",
      "relmEg": "The court ordered the defendant to pay restitution to the victims.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Retainer",
      "meaning": "A fee paid in advance to secure services, often for legal representation.",
      "relmEg": "The client paid a retainer to the attorney to represent him in the case.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Ruling",
      "meaning": "An official decision made by a judge or court.",
      "relmEg": "The judge issued a ruling in favor of the plaintiff.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Slander",
      "meaning": "The action or crime of making a false spoken statement damaging to a person's reputation.",
      "relmEg": "The celebrity sued the tabloid for slander.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Stare Decisis",
      "meaning": "The legal principle of determining points in litigation according to precedent.",
      "relmEg": "The judge followed the doctrine of stare decisis in reaching his decision.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Statute",
      "meaning": "A written law passed by a legislative body.",
      "relmEg": "The statute prohibits discrimination on the basis of race or gender.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Statute of Limitations",
      "meaning": "A law setting the maximum time after an event within which legal proceedings may be initiated.",
      "relmEg": "The statute of limitations for filing a personal injury lawsuit is typically two years.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Statutory Law",
      "meaning": "Law enacted by a legislative body.",
      "relmEg": "The statute governs the sale of alcoholic beverages in the state.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Subpoena",
      "meaning": "A court order requiring a person to appear in court or produce documents.",
      "relmEg": "She received a subpoena to testify in the trial next week.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Substantive Law",
      "meaning": "The part of the law that creates, defines, and regulates rights, including, for example, contract law, property law, and criminal law.",
      "relmEg": "The judge instructed the jury on the substantive law relevant to the case.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Supreme Court",
      "meaning": "The highest judicial court in a country or state.",
      "relmEg": "The Supreme Court issued a landmark ruling on civil rights.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Testimony",
      "meaning": "Oral evidence given by a witness under oath.",
      "relmEg": "The witness provided compelling testimony that helped sway the jury.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Tort",
      "meaning": "A wrongful act or an infringement of a right (other than under contract) leading to civil legal liability.",
      "relmEg": "Negligence is a common basis for tort claims.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Tortfeasor",
      "meaning": "A person who commits a tort.",
      "relmEg": "The plaintiff sued the tortfeasor for negligence.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Verdict",
      "meaning": "The decision of a jury or judge in a trial.",
      "relmEg": "The jury reached a unanimous verdict of guilty.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Voir Dire",
      "meaning": "The process of questioning prospective jurors to determine their qualifications and suitability to serve on a jury.",
      "relmEg": "The attorneys conducted voir dire to select an impartial jury.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Waiver",
      "meaning": "An intentional relinquishment of a known right or privilege.",
      "relmEg": "The defendant signed a waiver of his right to a jury trial.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Warrant",
      "meaning": "A legal document issued by a judge authorizing law enforcement to perform a certain action, such as making an arrest or searching a property.",
      "relmEg": "The police obtained a warrant to search the suspect's home.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Writ",
      "meaning": "A formal written order issued by a court.",
      "relmEg": "The court issued a writ of habeas corpus.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    },
    {
      "term": "Writ of Certiorari",
      "meaning": "An order by a higher court directing a lower court to send up a case for review.",
      "relmEg": "The Supreme Court granted a writ of certiorari to review the lower court's decision.",
      "contextId": "660a1d4e2cbdfdb40bd14a3e"
    }
  ]
