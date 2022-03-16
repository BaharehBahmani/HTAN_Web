
const Home = () => {
    return ( 
        <div>
            <div class="container">
                
                <div class="row" style={{float:"right"}}>

                    <div style={{background:"linear-gradient(#A60623,#E41C3E)", height:"300px", width:"100%",borderRadius: '20px'}}>
                        <p style={{color:"white",fontSize:"35px", float:"left",marginLeft:"20px",marginTop:"50px"}}>WELCOME TO THE HUMAN <br></br>TUMOR ATLAS NETWORK</p>
                        <div>
                            <img src="/Desktop/Amir/image.png" class="rounded float-left" alt=""/>
                        </div>
                    </div>

                    <div class="col-2" style={{marginTop:"50px"}}>
                        <h2>HTAN</h2>
                        <p>An NCI-funded Cancer Moonshot initiative to construct 3-dimensional atlases of the dynamic cellular,
                             morphological, and molecular features of human cancers as they evolve from precancerous lesions
                              to advanced disease.</p>
                        <button style={{backgroundColor:"#0db7ed", color:"white", height:"50px"}}>SEE ALL Patients</button>
                    </div>

                    <div class="col-10" stlye={{backgroundColor:"gray"}}>
                        <h2 style={{color:"#A60623", margin:"50px 0 10px 0"}}>Learn More about HTAN</h2>
                        <div class="row">
                            <div class="col-2"style={{width:"250px",height:"300px",border:"2px solid black",margin:"10px 10px 10px 10px", backgroundColor:"#500411",position:"relative",borderRadius: '20px'}}>
                                <h4 style={{padding:"15px 5px 5px 5px", color:"white",fontSize:"160%"}}>A001</h4>
                                <p style={{color:"white"}}>You can see it.</p>
                                <div>
                                {/* <a href="./" style={{background: "#97420E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%",boxSizing:"inherit", textDecorationLine:"none",bottom:"0",margin:"0",padding:"0"}}>See the Patient</a> */}
                                <a href='./a001'><button style={{background: "#97420E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%"}}>See the Patient </button></a>
                                <a href='./chart'><button style={{background: "#A60D1E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%"}}>See the graphs </button></a>
                                </div>
                            </div>

                            <div class="col-2"  style={{width:"250px",height:"300px",border:"2px solid black",margin:"10px 10px 10px 10px", backgroundColor:"#A60D1E",borderRadius: '20px'}}>
                                <h4 style={{padding:"15px 5px 5px 5px", color:"white"}}>A002</h4>
                                <p style={{color:"white"}}>You can see it.</p>
                                <a href='./a002'><button style={{background: "#97420E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%"}}>See the Patient </button></a>
                                </div>

                            <div class="col-2"  style={{width:"250px",height:"300px",border:"2px solid black",margin:"10px 10px 10px 10px", backgroundColor:"#290307",borderRadius: '20px'}}>
                                <h4 style={{padding:"15px 5px 5px 5px", color:"white"}}>A014</h4>
                                <p style={{color:"white"}}>You can see it.</p>
                                <a href='./a014'><button style={{background: "#97420E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%"}}>See the Patient </button></a>
                            </div>

                            <div class="col-2"  style={{width:"250px",height:"300px",border:"2px solid black",margin:"10px 10px 10px 10px", backgroundColor:"#500411",borderRadius: '20px'}}>
                                <h4 style={{padding:"15px 5px 5px 5px", color:"white"}}>A015</h4>
                                <p style={{color:"white"}}>You can see it.</p>
                                <a href='./a015'><button style={{background: "#97420E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%"}}>See the Patient </button></a>
                            </div>
                            

                        </div>


                        <div class="row">
                            <div class="col-2"style={{width:"250px",height:"300px",border:"2px solid black",margin:"10px 10px 10px 10px", backgroundColor:"#A60D1E",position:"relative",borderRadius: '20px'}}>
                                <h4 style={{padding:"15px 5px 5px 5px", color:"white",fontSize:"160%"}}>A040</h4>
                                <p style={{color:"white"}}>You can see it.</p>
                                <a href='./a040'><button style={{background: "#97420E",border:"2px solid #97420E", color:"white", fontSize:"30px",width:"100%"}}>See the Patient </button></a>
                            </div>

   
                        </div> 
                    </div>

                    <div style={{flexDirection:"row",background:"linear-gradient(#A60623,#E41C3E)",height:"50px",bottom:"0",width:"100%",color:"white"}}>
                        <p>it is a footer </p>
                    </div>

                </div>
            </div>       
        </div>

    );
}
 
export default Home;

