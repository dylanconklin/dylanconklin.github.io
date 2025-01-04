import * as Component from './Components';

export default function POLAR() {
    return (
        <>
            <div className="container">
                <Component.H1 content="POLAR Links" />
                <a target="_blank" href="https://www.vldb.org/pvldb/vol17/p1350-justen.pdf" rel="noreferrer">
                    Study PDF
                </a>
                <br />
                <a target="_blank" href="https://docs.google.com/presentation/d/13YhEJDGuADcxhowTtGpZ4eJt07ue2QwaG_PoNYrGjFI/" rel="noreferrer">
                    Slideshow
                </a>
                <br />
                <a target="blank" href="https://drive.google.com/file/d/13OhjrWb1MKvoNlwAj2rki14oe8u4H8u-/view?usp=sharing">
                    My Notes
                </a>
            </div>
        </>
    )
}