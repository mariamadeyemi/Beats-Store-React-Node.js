function Links({ link }) {
    return ( 
        <ul>
            {link.map((li)=>{
                <li key={indexof(li)}>{li}</li>
            })}
            
        </ul>
     );
}

export default Links;