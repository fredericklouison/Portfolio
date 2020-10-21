import React from 'react'
import Header from '../header'
import './About.css'
import * as img from  '../../Images/moi.png'
import * as img2 from  '../../Images/Diagnose2.png'
import * as cv from  '../../Images/CV_Frederick_louison.pdf'
const About = () => {
    return (
        <div id='About'>
            <Header/>
            <div id='firstText'>
                <img src={img}/>
                <div>
                    <p>Je m'appelle Frédérick Louison, après  un bac scientifique et un contrat dans la  gendarmerie, j'ai décidé de me reconvertir dans le développement web.</p>
                    <p>
                    En effet ce métier m'attire depuis de nombreuses années mais je n'ai jamais osé sauter le pas .  
                    </p>
                    <p>
                    J'ai commencé à me former seul  car j'apprends très rapidement , néanmoins j'ai souhaité apporter plus de crédit à ce que j'ai appris j'ai donc décidé de m'inscrire sur openClassrooms à la formation de développeur web
                    </p>
                    <p>
                    Cette formation étant désormais terminée je recherche des missions en freelances
                        ou un contrat en agence .
                    </p>
                </div>
            </div>
            <div id='secondText'>
                <div>
                    <h4> 
                        Coté frontend mes technos sont:
                    </h4><br/>
                    <p>  
                        Html,  css, Sass, javascript, Bootstrap, RéactJS , VueJS.
                    </p>
                    <h4>
                        Coté backend :
                    </h4><br/>
                    <p>
                         NodeJS,ExpressJS,MongoDB,MySQL
                    </p>
                </div>
                <img src={img2}/>
            </div>
            <div id='upload'>
                <a id='CVlink'download="CV_Frédérick_Louison.pdf" href={cv}>
                    <div id='CV'>
                        <span>
                            Télécharger mon CV
                        </span>
                    </div>
                </a>
            </div>
            
            
            <ul id='cicleArea'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default About