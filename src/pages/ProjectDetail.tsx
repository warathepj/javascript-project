import { useParams } from 'react-router-dom';
import { projects } from '../types/Project';
import { Button } from "@/components/ui/button"


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

      <h2 className='text-blue-700'>
        {(() => {
          const project = projects.find((p) => p.id === Number(id));
          return project ? project.name : "";
        })()}
      </h2>

      <h2 className='mb-3'>
        {(() => {
          const project = projects.find((p) => p.id === Number(id));
          return project ? project.description : "";
        })()}
      </h2>

      <h2 className='text-violet-600'>
        {(() => {
          const project = projects.find((p) => p.id === Number(id));
          return project ? "Tech Stack: " + project.techStack.join(", ") : "";
        })()}
      </h2>

      {(() => {
        const project = projects.find((p) => p.id === Number(id));
        if (project && project.learn && project.learn.length > 0) {
          return (
            <div className='w-[40rem]'>
              <h2 className='text-green-700 mt-4'>สิ่งที่จะได้เรียนรู้จากโปรเจ็คนี้ :</h2>
              <ul>
                {project.learn.map((item, index) => (
                  <li key={index} className="break-words mb-3">- {item}</li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })()}

      <h2 className='text-2xl text-red-700'>
        ซอร์สโค้ด สำหรับศึกษา หรือนำไปพัฒนาต่อยอด
        ราคาพิเศษ {(() => {
          const project = projects.find((p) => p.id === Number(id));
          return project ? project.price : "";
        })()} บาท 
      </h2>
      <h2 className='text-2xl text-red-700'>
      เท่านั้น สนใจ คลิก
      </h2>
      <Button asChild>
        <a href="https://www.facebook.com/people/CorgiDev/61569425919262/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </Button>

    </div>
  );
}
