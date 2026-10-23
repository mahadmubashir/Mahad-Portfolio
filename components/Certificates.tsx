import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Certificates = () => {
  return (
    <div>
      {/* Certificates Section */}
      <div className="py-20" id="certificates">
        <h2 className="heading text-center mb-10">
          <span className="text-purple">Results & Certificates</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="/Transcript-Mahad.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="BSc Transcript"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a
            href="/O_A Levels Results.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="GCSE O/A Levels"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/SatMahad.pdf" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title=" SAT Score"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <a href="/IELTS.pdf" target="_blank" rel="noopener noreferrer">
            <MagicButton
              title="IELTS Score"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* <a href="mailto:mahad@example.com">
                  <MagicButton
                    title="Bachelor's Degree"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a> */}
        </div>
      </div>
      <div className="py-20" id="publications">
        <h2 className="heading text-center mb-10">
          <span className="text-purple">Publications</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {" "}
          <a
            href="/IEEE_Ethereum_Analysis.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="View Publications"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
