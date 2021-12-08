import { Component } from 'react';
import Home from './Components/About';
import Home from './Components/Home';
import Home from './Components/Videos';

class About extends Component{
    render(){
        return(
         <div>
            <Router>
            <div>
              <nav>
                <Link to="/"><h1>Home</h1></Link>
                <Link to="/videos"><h1>Videos</h1></Link>
              </nav>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/videos/:id"/>
                <Video />
              </Switch>
            </div>
          </Router>
           <div className='About'>
                    <h2>About</h2>
                    <p>
                        This YouTube clone was created by four great developers and A.K.A 1/2 of the 24/[7] group. 
                        <b/>
                        Have fun with the app. Please contact us with any suggestions for future iterations. 
                        <b/>
                        You can contact us through our links listed below.
                    </p>
                    <hr />
                
                <div>
                    <h3>Ronnie Garcia</h3>
                    <p>Full Stack Web Developer</p>
                    <p> 
                        Ronnie, please full in your bio here. Native New Yorker, currently enrolled in a one year Goggle funded Full Stack Web Development program.
                    </p>
                    <button>
                        onClick={() => window.open('https://www.linkedin.com/in/ronniegarc1a/')}
                        style={{ color:'blue', cursor: 'pointer' }}
                    </button>
                </div>
                <div>
                    <h3>Name Ping Louie</h3>
                    <p>Full Stack Web Developer</p>
                    <p> 
                        Ping, please full in your bio here. Lives in New York, currently a Full Stack Web Development with a background in adode creative suite and microsoft. 
                        <br /> 
                        Knows conversational cantonese, taishaneese and has worked as a cashier at basanova ramen.
                        <br />
                        Educated at the Art Institute of New York, Per Scholas and Pursuit.
                        <br />
                        A fun fact about me is I have an interest in Chinese Costume, Dramas and Reading Manga.
                    </p>
                    <button>
                        onClick={() => window.open('https://www.linkedin.com/in/name-ping-louie-02a1131a2/')}
                        style={{ color:'blue', cursor: 'pointer' }}
                    </button>
                </div>
                <div>
                    <h3>Rob Walker</h3>
                    <p>Full Stack Web Developer</p>
                    <p> 
                        Currently enrolled in a one year Goggle funded Full Stack Web Development program.
                        <br />
                        I love tech, CES is my Comic-Con from hardware, gadgets and gizmos to software especially Java Script, HTML and CSS.
                        <br />
                        I'm a team player, a tech geek, a food enthusiast, who is up for almost anything. I want to advocacy for community, and equality. I like companies with strong ethics, committed to their employees, community and the environment.
                    </p>
                    <button>
                        onClick={() => window.open('https://www.linkedin.com/in/rob-w-141799203/')}
                        style={{ color:'blue', cursor: 'pointer' }}
                    </button>
                </div>
                <div>
                    <h3>Cesar Ortiz</h3>
                    <p>Full Stack Web Developer</p>
                    <p> 
                        Cesar, please full in your bio here. Currently enrolled in a one year Goggle funded Full Stack Web Development program.
                    </p>
                    <button>
                        onClick={() => window.open('https://www.ceazthemoment@aol.com')}
                        style={{ color:'blue', cursor: 'pointer' }}
                    </button>
                </div>
            </div>
          </div>  
        )
    }

}

export default About;