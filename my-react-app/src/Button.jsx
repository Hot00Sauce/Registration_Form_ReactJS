function Button () {
    const buttonStyle = {
        backgroundColor : "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "block",
        height: "150px",
        width: "400px",
        maxHeight: "500px",
        maxWidth: "200px",
    }
    return(
        <button className="button" style={buttonStyle}>Click me</button>
    );
}

export default Button;