import React from 'react';
import './App.css';
import './styles/app.css'

function App() {
  return (
    <div className='App'>
      <section className='w-3/6 m-auto flex flex-wrap mt-20'>
        <div className='flex flex-wrap'>
          <div className='w-full mb-8 p-10 bg-gray-100 rounded shadow'>
            <span className='text-gray-300 text-6xl absolute italic right-10'>
              01
            </span>
            <h2 className='z-10 relative text-2xl text-gray-900 absolute'>
              DEMMER
            </h2>
            <hr className='block mb-6 mt-5 w-8 border-red-500 h-0 border-t-2'/>
            <p className='text-gray-700'>
              Mauris dui sem, auctor vel aliquet vitae, blandit at sapien. Cras ac nibh vehicula, 
              consequat eros non, imperdiet urna. Nulla mattis condimentum est quis iaculis. Morbi 
              sagittis in metus sed egestas. Nunc pharetra tempus pharetra. Quisque pretium, justo 
              eu vulputate elementum, nisl ante viverra tellus, vitae consequat libero tortor sit 
              amet justo. Sed id rutrum arcu. Quisque aliquet suscipit magna a convallis.
            </p>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default App;
