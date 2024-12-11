function CountryCard({flag, name}){
    return(
        <div style={
            {
                border:"1px solid black",
                height:"150px",
                width:"150px",
                padding:"8px",
                borderRadius:"10px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                textAlign:"center",
                alignItems:"center"
               

        }

        }>
           
            <img src={flag} alt={flag.name} style={{
                
                    maxWidth:"120px", 
                    height:"120px", 
                   
                   
                   

                }
            }/>
            <h2 style={{
               fontSize:"13px",
             
                
                
            }}>{name}</h2>
            

        </div>
    );

}

export default CountryCard