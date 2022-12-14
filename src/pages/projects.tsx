import * as React from "react";
import '../styles/projects.scss';


const projects = [
    {
        title: "Hashbot",
        description: "Impersonation prevention for Discord Servers",
        footer: "RUST | KOTLIN",
        link: "https://hashbot.io"
    },
    {
        title: "Discrab",
        description: "Rust Discord Bot Framework",
        footer: "RUST",
        github: "https://github.com/KolCrooks/discrab"
    },
    {
        title: "AdvocAI",
        description: "AI Genereted Legal Advice",
        footer: "JS | PYTHON",
        github: "https://github.com/KolCrooks/discrab"
    },
];

const ProjectsPage = () => {
    const background = React.useRef<HTMLDivElement>(null);
    // check if routed from main page

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (background.current) {
                const xPercent = e.clientX / window.innerWidth;
                const yPercent = e.clientY / window.innerHeight;
                background.current.style.setProperty('--x', `${xPercent * 5}px`);
                background.current.style.setProperty('--y', `${yPercent * 5}px`);
            }
        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);
    // for(let i = 0; i < 10; i++) {
    //     invertBlocks.push(<div className={`invert-block invert-${i}`} key={i} />);
    //     invertBlocks.push(<div className={`invert-circle invert-${i}`} key={i} />);
    // }

    return <div className="projects-page" ref={background}>
        <div className="fader" />
        <div className="projects-text">
            <div className="title">PROJECTS</div>
            <div>
                <a href={"/"} className="home">{"<"}- HOME</a>
            </div>
        </div>
        <div className="projects-container">
            {
                projects.map((p,i)=> {
                    return <div className="project" key={i}>
                            <div className="title">{p.title}</div>
                            <div>{p.description}</div>
                            <div className="spacer" />
                            <div className="footer">
                                {p.footer}
                            </div>
                            {
                                p.github ? <a className="link" href={p.github}>GITHUB</a> : undefined
                            }
                            {
                                p.link ? <a className="link" href={p.link}>LINK</a> : undefined
                            }
                    </div>
                })
            }
        </div>
    </div>
}

export default ProjectsPage;