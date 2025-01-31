import { useNavigate } from 'react-router-dom';
import { Project, projects } from '@/types/Project';

export default function ProjectTable() {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Javascript Projects</h1>
      <p>สนใจโปรเจ็คไหน ให้คลิกที่โปรเจ็คนั้นเลยครับ</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thai Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tech Stack</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((project) => (
              <tr
                key={project.id}
                onClick={() => handleRowClick(project.id)}
                className="project-table-row"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.thaiName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{project.description}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}