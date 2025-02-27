import PropTypes from 'prop-types'

function Student(props) {
    return(
        <>
        <div className="student">
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>student: {props.isStudent ? "Accept" : "Reject"}</p>
        </div>
        </>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isstudent: PropTypes.bool,
}

Student.defaultTypes = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student