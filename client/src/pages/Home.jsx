import React from 'react'

export const Home = () => {
  return (
    <>
      <div className='mt-24 p-3 grid grid-cols-7 w-full px-6'>
        <div className='flex justify-center col-span-1 min-h-screen bg-red-300'>
          aside izquierdo
        </div>

        <div className='flex justify-center col-span-5 min-h-screen card'>
          <div className='h-40 w-5/6 px-3 pt-2 flex justify-center  rounded-md flex-col gap-1 shadow-2xl bg-slate-50'>
            <section className='h-3/5 pt-4 flex justify-center'>
              <textarea className=' w-11/12 rounded-md p-1 border-2 shadow-sm' placeholder='En qué estas pensando?...' name="" id=""></textarea>
            </section>
            <section className='pt-2 px-6 flex justify-between pb-3'>
              <label htmlFor="file-upload" className="cursor-pointer bg-gray-900 text-gray-50 py-2 px-8 rounded-lg hover:bg-gray-500 font-bold flex items-center gap-2 hover:text-black">
                Upload<i class="fa-solid fa-upload text-xl"></i></label>
              <input id="file-upload" type="file" className="hidden" />
              <button className='bg-gray-900 p-3 rounded text-gray-50 hover:bg-gray-500 hover:text-black font-bold' type="button">Publicar</button>
            </section>
          </div>

        </div>

        <div className='flex col-span-1 min-h-screen shadow-2xl justify-center'>
          <ul className='h-screen flex flex-col font-bold text-gray-900 text-md justify-evenly items-center'>
            <a href="">
              <li><i class="fa-solid fa-box-archive mr-2"></i>Archivo</li>
            </a>

            <a href="">
              <li><i class="fa-solid fa-address-book mr-2"></i>Contactos</li>
            </a>
            <a href="">
              <li><i class="fa-solid fa-floppy-disk mr-2"></i>Guardados</li>
            </a>
            <a href="">
              <li><i class="fa-solid fa-star mr-2"></i>Favoritos</li>
            </a>
            <a href="">
              <li><i class="fa-solid fa-gear mr-2"></i>Configuraciones</li>
            </a>
            <a href="">
              <li><i class="fa-solid fa-book mr-2"></i>Políticas de privacidad</li>
            </a>
          </ul>
        </div>

      </div>
    </>
  )
}
