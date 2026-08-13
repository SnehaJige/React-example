function JsxBasics() {

    const name = "Sneha";
    const year = 1995;
    const isActive = true;
    const skills = ["JS","HTML","CSS","Stencil","Angular"];
    const styles = {width: 100, height: 150, bachground:'red', margin: 10};
    const welCome = (guest) => `Hi ${guest}`;
  return (

    <div>
        <h1>Hello {name}</h1>
        <p>{name} is born in year {year}, and retired in {year + 30}</p>
        <p>Status: {isActive? 'Active' : 'Not Active'}</p>
        <p>Status : {isActive && `Welcome ${name}`}</p>
        <p>She has skills: </p>
        <ul>
            {skills.map((skill) =>(
                <li key={skill}>{skill}</li>
            ) )}
        </ul>
        <div>{JSON.stringify(styles)}</div>
        <div style={styles}>Hello</div>
        <div>{welCome("Jige")}</div>
    </div>
  )
}

export default JsxBasics;
