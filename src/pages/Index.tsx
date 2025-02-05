import ProjectTable from "@/components/ProjectTable";

const Index = () => {
  return (
  <div className="flex flex-col items-center">
    <ProjectTable />
<h2>CorgiDev</h2>
<img src="https://warathepj.github.io/js-ai-gallery/public/image/fri12.jpeg" alt="" className="w-32"/>
<footer>
        <p>CorgiDev © {new Date().getFullYear()}</p>
      </footer>
  </div>
  );
};

export default Index;
