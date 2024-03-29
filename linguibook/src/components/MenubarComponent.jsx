import { connect } from "react-redux"

function MenubarComponent(props) {
    const { userDet } = props
    console.log(userDet);
    return (
        <>
            MenubarComponent
        </>
    )
}

const mapStateToProps = (state) => ({
    userDet: state.localStorage.user,
});

export default connect(mapStateToProps)(MenubarComponent) 