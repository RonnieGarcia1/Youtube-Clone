import { Component } from 'react';


class About extends Component{
    render(){
        return(
         
          <div className='about'>
            <div id='aboutPage'>
              <br />  <h2>About</h2>
                    <p>
                        This YouTube clone was created by some awesome developers listed below. 
                        <br />
                        Our application allows users to search YouTube for videos using an external API. 
                        <br />
                        From the list of search results, the user may then choose a video to watch.
                        <br />
                        Have fun with the app. Please contact us with any suggestions for future iterations. 
                        <br />
                        You can contact us through our GitHub links listed below.
                    </p>
                    <br />
                    <hr id='hr'/>
                   
                <div>
                    <br />
                    <h2>Ronnie Garcia</h2>
                    <img src='https://avatars.githubusercontent.com/u/86433181?v=4' alt='headshot' />
                    <h3>Full Stack Web Developer</h3>
                    <p> 
                        Ronnie, please fill in your bio here. <br />
                        Etiam in felis at nisi iaculis ultrices.
                        Suspendisse potenti. Proin nec velit sit amet sapien sagittis vulputate eget ac eros. 
                        Pellentesque enim arcu, placerat suscipit lorem a, porttitor cursus augue. 
                        Maecenas diam elit, bibendum vitae imperdiet quis, tempor eu ipsum. Sed viverra suscipit semper. 
                        Sed nec purus venenatis, egestas risus sed, posuere sapien. Nulla vitae sollicitudin orci. 
                        Donec vitae odio urna. Morbi eu tincidunt velit. Pellentesque placerat ornare dignissim. 
                        Cras rhoncus eu neque et tempor. Fusce suscipit augue quis odio hendrerit, ut sodales lectus dictum.
                    </p>
                    <a href='https://www.github.com/RonnieGarcia1' className='gitLink'>Ronnie's GitHub</a>
                    <br />
                    <br />
                    <br />

                </div>
                <div>
                    <h2>Name Ping Louie</h2>
                    <img src='https://avatars.githubusercontent.com/u/72313206?v=4' alt='headshot' />
                    <h3>Full Stack Web Developer</h3>
                    <p> 
                        
                        Full Stack Developer Fellow at Pursuit. Continuously learning JavaScript, HTML, CSS and React. <br />
                        A fun fact about me is that I have an interest in Chinese costume dramas and reading Manga.
                    </p>
                    <a href='https://www.github.com/namepinglouie' className='gitLink'>Ping's GitHub</a>
                    <br />
                    <br />
                    <br />

                </div>
                <div>
                    <h2>Rob Walker</h2>
                    <img src='https://avatars.githubusercontent.com/u/75156944?v=4' alt='headshot' />
                    <h3>Full Stack Web Developer</h3>
                    <p> 
                        Currently enrolled in a one year Goggle funded Full Stack Web Development program.
                        <br />
                        I love tech, CES is my Comic-Con from hardware, gadgets and gizmos to software, especially Java Script, HTML and CSS.
                        <br />
                        I'm a team player, a tech geek, a food enthusiast, who is up for almost anything. 
                        <br />
                        I advocate for community and equality. 
                        <br />
                        I like companies with strong ethics, committed to their employees, community and the environment.
                    </p>
                    <a href='https://www.github.com/RobWalker-NYC' className='gitLink'>Rob's GitHub</a>
                    <br />
                    <br />
                    <br />

                </div>
                <div>
                    <h2>Cesar Ortiz</h2>
                    <img src='https://ca.slack-edge.com/TCVA3PF24-U023WM4UZBN-09209b1d0a79-72' alt='headshot' />
                    <h3>Full Stack Web Developer</h3>
                    <p> 
                        Cesar, please fill in your bio here. <br />
                        Vestibulum consectetur magna vitae ex venenatis blandit. 
                        Aenean feugiat in elit sed pretium. Quisque erat lectus, 
                        porttitor nec quam non, facilisis imperdiet turpis. 
                        Morbi non dui placerat, egestas velit eu, lacinia tellus. Nam ac pulvinar turpis. 
                        Etiam volutpat eu nunc a ornare. Nullam vulputate risus et feugiat euismod. 
                        Nulla non aliquet ipsum. Cras euismod cursus arcu a faucibus.
                    </p>
              
                    <a href='https://www.github.com/CeazTheMoment' className='gitLink'>Cesar's GitHub</a>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
         </div>  
        )
    }
}

export default About;