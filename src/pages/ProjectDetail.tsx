import { useParams } from 'react-router-dom';
import { projects } from '../types/Project';

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-xl font-bold mb-6">Project ID: {id}</p>
      <h1 className="text-3xl font-bold mb-6">
        {
          (() => {
            const project = projects.find((p) => p.id === Number(id));
            return project ? project.thaiName : "";
          })()
        }
      </h1>
      {/* <h1 className="text-3xl font-bold mb-6">แอพพลิเคชันแปลงค่าเงิน</h1> */}
    </div>
  );
}
