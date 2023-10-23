import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const AddProducts = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=8a5a04f93faaf1072c6596fcf564df79`

    // add laptop
    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url , {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {code, model, brand, price, processor, ram, ramtype, display, storagecapacity,
                graphics, keyboard, camera, speaker, audio, network, os, weight, warranty, description} = data;

                const newLaptop = { code, model, brand, img:imgUrl, price: parseFloat(price), processor, ram, ramtype, display, storagecapacity,
                graphics, keyboard, camera, speaker, audio, network, os, weight, warranty, description }
                axiosSecure.post('/laptop', newLaptop)
                .then(data=>{
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };


    return (
        <div className='container mx-auto'>
            <section className='text-center mb-10 ' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold' > Add laptop </span> </p>
            </section>

            {/* add product form */}
            <form className='px-5' onSubmit={handleSubmit(onSubmit)} >
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3' >
                    {/* 1. code */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Code*</span>
                        </label>
                        <input type="number" placeholder="Product Serial No:" {...register("code", { required: true })}  className="input input-bordered w-full " />
                    </div>

                </div>
            </form>

        </div>
    );
};

export default AddProducts;