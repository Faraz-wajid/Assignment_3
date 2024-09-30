import Link from "next/link"
export default function Header(){
    return(
        <div className="head-overall">
        <ul className="head-button">
            <Link href={"/"}><li>Home</li></Link>
            <Link href={"/fluid-mechanics"}><li>Fluid Mechanics</li> </Link>
           <Link href={"/fluid-statics"}> <li>Fluid Static</li> </Link>
           <Link href={"/fluid-dynamics"}> <li>Fluid Dynamics</li> </Link>
        </ul>
        </div>
    )
}