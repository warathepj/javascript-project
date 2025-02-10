import { useParams } from 'react-router-dom';
import { projects } from '../types/Project';
import { Button } from "@/components/ui/button"
import SliderCard from "@/components/slider-card";
import { useEffect, useState, useContext } from "react";

const BASE_URL = "https://warathepj.github.io/js-proj-images/";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const imageUrls = project?.images?.map(image => BASE_URL + image) || [];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-xl font-bold mb-6">Project ID: {id}</p>
      <h1 className="text-3xl font-bold mb-6 sm:text-4xl">
        {project ? project.thaiName : ""}
      </h1>

      <h2 className='text-blue-700 sm:text-xl'>
        {project ? project.name : ""}
      </h2>

      <h2 className='mb-3 sm:text-lg'>
        {project ? project.description : ""}
      </h2>

      <h2 className='text-violet-600 sm:text-lg'>
        {project ? "Tech Stack: " + project.techStack.join(", ") : ""}
      </h2>

      {project && project.learn && project.learn.length > 0 && (
        <div className='w-full sm:w-[40rem]'>
          <h2 className='text-green-700 mt-4'>สิ่งที่จะได้เรียนรู้จากโปรเจ็คนี้ :</h2>
          <ul>
            {project.learn.map((item, index) => (
              <li key={index} className="break-words mb-3">- {item}</li>
            ))}
          </ul>
        </div>
      )}


      <pre className="text-lg font-semibold mb-2">Project Images</pre>
      <SliderCard images={imageUrls} />


      <h2 className='text-2xl text-red-700 sm:text-3xl'>
        ซอร์สโค้ด สำหรับศึกษา หรือนำไปพัฒนาต่อยอด
        ราคาพิเศษ {project ? project.price : ""} บาท
      </h2>
      <h2 className='text-2xl text-red-700 sm:text-3xl'>
      เท่านั้น สนใจ คลิก
      </h2>
      <Button asChild className="mt-4">
        <a href="https://www.facebook.com/people/CorgiDev/61569425919262/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </Button>

    </div>
  );
}
