import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { BriefcaseBusiness, GraduationCap, Tag } from "lucide-react";
import { IoMdGlobe } from "react-icons/io";
import { useParams, useRouter } from "next/navigation"; // Importer useRouter
import enterprisesData from "@/components/data/data"; // Assurez-vous que le chemin est correct

interface CardProps {
  jobTitle: string;
  location: string;
  contractType: string;
  diplomaRequired: string;
  experience: string;
  time: string;
  remote: string;
  jobId: number;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  jobTitle,
  location,
  contractType,
  diplomaRequired,
  experience,
  time,
  remote,
  onClick,
}) => {
  return (
    <div 
      onClick={onClick} 
      className="group cursor-pointer flex p-5 hover:text-blue-400 justify-between border rounded h-full font-extrabold text-[#333333] lg:p-3 w-full"
    >
      <div className="flex flex-col sm:flex-col md:flex-row">
        <div className="flex items-center justify-center gap-9">
          <div>
            <p>{jobTitle}</p>
            <div className="flex flex-col md:flex-row gap-3 mt-4">
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 text-xs flex gap-1 items-center justify-center px-2">
                  <Tag size={15} color="grey" />
                  {contractType}
                </button>
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 gap-2 border text-nowrap text-xs flex items-center justify-center px-2">
                  <CiLocationOn size={15} color="grey" />
                  {location}
                </button>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                  <GraduationCap size={15} color='grey' />
                  {diplomaRequired}
                </button>
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-2 items-center justify-center px-2">
                  <BriefcaseBusiness size={11} color="grey" />
                  {experience}
                </button>
              </div>
              <div className="flex gap-3">
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-2 items-center justify-center px-2">
                  <IoMdTime color="grey" />
                  {time}
                </button>
                <button className="bg-[#f4f4f4] group-hover:bg-blue-200 border text-xs flex gap-1 items-center justify-center px-2">
                  <IoMdGlobe color="grey" />
                  {remote}
                </button>
              </div>
            </div>
          </div>
          <div className="h-20 w-12 sm:pl-14 lg:pl-0 flex items-center justify-center">
            <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const JobCards: React.FC = () => {
  const { id } = useParams(); 
  const router = useRouter();
  
  // Recherche de l'entreprise correspondant à l'ID
  const enterprise = enterprisesData.enterprisesData.find(ent => ent.id.toString() === id);

  // Vérification de l'existence de l'entreprise
  if (!enterprise) {
    return <div>Entreprise non trouvée</div>;
  }

  // Fonction de navigation vers les détails du job
  const handleNavigation = (_jobId: number) => {
    router.push(`/detailsJob/${_jobId}`); // Naviguer vers la page des détails du job
  };

  return (
    <>
      {enterprise.jobsnew.map((job, index) => (
        <Card
          key={index}
          onClick={() => handleNavigation(job.jobId)} // Assurez-vous que job.jobId existe
          jobId={job.jobId} // Passez le jobId ici
          jobTitle={job.title}
          location={job.location}
          contractType={job.contractType}
          diplomaRequired={job.diploma}
          experience={job.experience}
          time={job.workTime}
          remote={job.remote}
        />
      ))}
    </>
  );
};

// Exportation par défaut pour JobCards
export default JobCards;
