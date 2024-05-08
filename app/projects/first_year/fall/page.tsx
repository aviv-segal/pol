import calc from './calc.png';
import Image from "next/image"
import Link from "next/link";
export default function Page(){
  return <div className="container">
  <h1 className="head">Calculator in python</h1>
  <p className="description">
   This is my first project ever in coding, it's a Calculator with the python programming language
   I learned python from a free 4 hours course on youtube, this project helped me learn the basics of programming.
  </p>
  <div className="images">
    <div className="image-container">
      <Image className="image" src={calc} alt=""/>
    </div>
    
    <ul className="linksprj">
  
  <li className="linkprj">
    <Link href={"#"}>LinkedIn</Link>
  </li>
  <li className="linkprj"><Link href={"#"}>Github</Link></li>
  <li className="linkprj"><Link href={"#"}>Facebook</Link></li>
</ul>
    
  </div>
  </div>

  
}