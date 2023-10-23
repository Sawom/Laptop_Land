import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import {AiFillFolderAdd} from 'react-icons/ai';

const AddProducts = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=8a5a04f93faaf1072c6596fcf564df79`

    // add laptop
    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image', data.img[0])

        fetch(img_hosting_url , {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                console.log(imgUrl)
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
                            title: 'Laptop added successfully',
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
            <section className='text-center mb-10 mt-5' > 
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
                        <input type="number" placeholder="Product Serial No" {...register("code", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 2. model */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Laptop Model*</span>
                        </label>
                        <input type="text" placeholder="Laptop Model" {...register("model", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 3. brand */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Brand*</span>
                        </label>
                        <input type="text" placeholder="Brand" {...register("brand", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 4. price */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" {...register("price", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 5. processor */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Processor*</span>
                        </label>
                        <input type="text" placeholder="Processor" {...register("processor", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 6. ram */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Ram*</span>
                        </label>
                        <input type="text" placeholder="Ram" {...register("ram", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 7. ramtype */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Ram Type*</span>
                        </label>
                        <input type="text" placeholder="Ram Type" {...register("ramtype", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 8. display */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Display*</span>
                        </label>
                        <input type="text" placeholder="Display" {...register("display", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 9. Storage Capacity */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Storage Capacity*</span>
                        </label>
                        <input type="text" placeholder="Storage Capacity" {...register("storagecapacity", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 10. graphics */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Graphics*</span>
                        </label>
                        <input type="text" placeholder="Graphics" {...register("graphics", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 11. keyboard */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Keyboard*</span>
                        </label>
                        <input type="text" placeholder="Keyboard" {...register("keyboard", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 12. camera */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Camera*</span>
                        </label>
                        <input type="text" placeholder="Camera" {...register("camera", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 13. speaker */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Speaker*</span>
                        </label>
                        <input type="text" placeholder="Speaker" {...register("speaker", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 14. audio */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Audio*</span>
                        </label>
                        <input type="text" placeholder="Audio" {...register("audio", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 15. network */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Network*</span>
                        </label>
                        <input type="text" placeholder="Network" {...register("network", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 16. os */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Operating System*</span>
                        </label>
                        <input type="text" placeholder="Operating System" {...register("os", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 17. weight */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Weight*</span>
                        </label>
                        <input type="text" placeholder="Weight" {...register("weight", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    {/* 18. warranty */}
                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Warranty*</span>
                        </label>
                        <input type="text" placeholder="Warranty" {...register("warranty", { required: true })}  className="input input-bordered w-full " />
                    </div>

                    

                </div>

                {/* 19. Description */}
                <div className="form-control w-full mb-6">
                    <label className="label">
                        <span className="label-text font-semibold">Description*</span>
                    </label>
                    <textarea type="text" placeholder="Description" {...register("description", { required: true })}  className="textarea textarea-bordered h-24 w-full " />
                </div>

                {/* 20. img upload */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Laptop Image*</span>
                    </label>
                    <input type="file" {...register("img", { required: true })} className="file-input file-input-bordered file-input-ghost w-full "  />
                </div>

                {/* submit button */}
                <button style={{backgroundColor: '#212E52'}}  className="btn  px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md"  type="submit"> <AiFillFolderAdd></AiFillFolderAdd> Add Laptop</button>

            </form>

        </div>
    );
};

export default AddProducts;