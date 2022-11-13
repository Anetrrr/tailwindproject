import React, {useState} from "react";
import Hero from "../components/Hero";
import Modal from "../components/Modal";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  const [showModal, setshowModal] = useState(false)

  return <div>
        <Modal isVisible={showModal} onClose={() => setshowModal(false)}>
        <div className='p-6'>
          <h2 className='text-xl font-roboto font-semibold text-gray-900 mb-5'>
            Hello and welcome to my portfolio!
          </h2>
          <p className='p-6 text-gray-500'>
            Thank you for visiting my porfolio. Do look around. You can leave a review in the review section. I look forward to having a conversation with you.
          </p>

          <aside className='font-roboto flex justify-end items-end'>
             - Anetor
          </aside>
        </div>
        </Modal>
        <Hero />
        <Projects />
        <Skills />

  </div>;
};

export default Home;
