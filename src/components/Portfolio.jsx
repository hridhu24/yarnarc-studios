import ProjectCard from "./ProjectCard";

const projects = [
  { title: "Bunny", image: "https://via.placeholder.com/200", description: "Handmade crochet bunny" },
  { title: "Bag", image: "https://via.placeholder.com/200", description: "Stylish crochet tote bag" },
  { title: "Doll", image: "https://via.placeholder.com/200", description: "Cute amigurumi doll" }
];

function Portfolio() {
  return (
    <section>
      <h2>My Crochet Work</h2>
      <div>
        {projects.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
