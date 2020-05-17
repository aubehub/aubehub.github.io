import React from 'react';
import './ProjectsPage.css';

const projects = [
  {name: "BOOK EXCERPT", href: "book/index.html", imgSrc:"img/book-excerpt.jpg"},
  {name: "ZORGBLAG'S BLOG", href: "blog-begin/blog.html", imgSrc:"img/zorbalas-blog.jpg"},
  {name: "ALIEN ABDUCTION ORDER FORM", href: "4-forms/begin/forms.html", imgSrc:"img/abduction-form.jpg"},
  {name: "CALCULATOR", href: "5-calculadora/begin/calculator.html", imgSrc:"img/calculator.jpg"},
  {name: "DOGGOS", href: "doggos/index.html", imgSrc:"img/doggos.jpg"},
  {name: "LUNA GALLERY", href: "gallery-2/index.html", imgSrc:"img/luna-gallery.jpg"},
  {name: "FEED A STAR MOLE", href: "gallery-2/index.html", imgSrc:"img/mole-game.jpg"},
]

projects.map(project => {
  return <li className="li-projects"><a href={project.href}>{project.name}<img src={project.imgSrc} alt={project.name}/></a></li>
})


export class ProjectsPage extends React.Component{
  render(){
    return (
      <div>
        <h1 className="h1-projects">Projects</h1>
          <section className="project-list">
            <ul className="ul-projects">
            {
                projects.map(project => {
                  return (
                  <li className="li-projects">
                    <div className="project-titles"><a href={project.name}>{project.name}</a></div> 
                    <div className="outlay">
                      <a href={project.href} className="overlay">
                      </a>
                      <a href={project.href} className="overlay-btn">
                      Go to project <span className="arrow-right">→</span>
                      </a>
                      <a href={project.href}>
                      <img src={project.imgSrc} alt={project.name}/>
                      </a>
                    </div>
                  </li>
                  );
                })
            }
            </ul>
          </section>
      </div>
    )
  }
}