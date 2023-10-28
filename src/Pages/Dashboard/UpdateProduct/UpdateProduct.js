import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {RxUpdate} from 'react-icons/rx';

const UpdateProduct = () => {
    const [update, setUpdate] = useState({});
    const {id} = useParams();

    // single data load
    useEffect( ()=>{
        fetch(`https://laptoplanddb-production.up.railway.app/laptop/${id}`)
        .then(res=> res.json())
        .then( (data)=>{
            setUpdate(data)
        } )
    }, [] )

    // 1. update code
    const handleCodeChange = event =>{
        const updatedCode = event.target.value;
        const updatedProduct = {
            code: updatedCode, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 2. update model
    const handleModelChange = event =>{
        const updatedModel = event.target.value;
        const updatedProduct = {
            code: update.code, model: updatedModel, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 3. update brand
    const handleBrandChange = event =>{
        const updatedBrand = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: updatedBrand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 4. update price
    const handlePriceChange = event =>{
        const updatedPrice = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: updatedPrice, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 5. update processor
    const handleProcessorChange = event =>{
        const updatedProcessor = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: updatedProcessor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 6. update ram
    const handleRamChange = event =>{
        const updatedRam = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: updatedRam, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 7. update ramtype
    const handleRamtypeChange = event =>{
        const updatedRamtype = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: updatedRamtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 8. update display
    const handleDisplayChange = event =>{
        const updatedDisplay = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: updatedDisplay, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 9. update storagecapacity
    const handleStoragecapacityChange = event =>{
        const updatedStoragecapacity = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: updatedStoragecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 10. update graphics
    const handleGraphicsChange = event =>{
        const updatedGraphics = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: updatedGraphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 11. update keyboard
    const handleKeyboardChange = event =>{
        const updatedKeyboard = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: updatedKeyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 12. update camera
    const handleCameraChange = event =>{
        const updatedCamera = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: updatedCamera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 13. update speaker
    const handleSpeakerChange = event =>{
        const updatedSpeaker = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: updatedSpeaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 14. update audio
    const handleAudioChange = event =>{
        const updatedAudio = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: updatedAudio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 15. update network
    const handleNetworkChange = event =>{
        const updatedNetwork = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: updatedNetwork, os: update.os, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 16. updated os
    const handleOsChange = event =>{
        const updatedOs = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: updatedOs, weight: update.weight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 17. update weight
    const handleWeightChange = event =>{
        const updatedWeight = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: updatedWeight, warranty: update.warranty, description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 18. update warranty
    const handleWarrantyChange = event =>{
        const updatedWarranty = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: updatedWarranty , description: update.description
        }
        setUpdate(updatedProduct);
    }

    // 19. update description
    const handleDescriptionChange = event =>{
        const updatedDescription = event.target.value;
        const updatedProduct = {
            code: update.code, model: update.model, brand: update.brand, price: update.price, 
            processor: update.processor, ram: update.ram, ramtype: update.ramtype,
            display: update.display, storagecapacity: update.storagecapacity, graphics: update.graphics,
            keyboard: update.keyboard, camera: update.camera, speaker: update.speaker, audio: update.audio,
            network: update.network, os: update.os, weight: update.weight, warranty: update.warranty , description: updatedDescription
        }
        setUpdate(updatedProduct);
    }

    // update function
    const handleUpdate = (event) =>{
        event.preventDefault();
        const url = `https://laptoplanddb-production.up.railway.app/laptop/${id}` ;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res=> res.json())
        .then( data =>{
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Updated!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                setUpdate({})
                event.target.reset()
            }
        } )
    }

    return (
        <div  className='container mx-auto'>
            <section className='text-center mb-10 mt-5' > 
                <p > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold' > Update  ITEM </span> </p>
            </section>
            <p className='text-center'>Update Laptop model for : <span className='font-bold'>{update.model}</span> </p>
            <br />
            {/* form */}
            <form className='px-5' onSubmit={handleUpdate} >
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3' >
                    {/* 1. code */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Code</span>
                        </label>
                        <input type="number" name="code" onChange={handleCodeChange} defaultValue={update.code || ''} placeholder="Update Code"   className="input input-bordered w-full " />
                    </div>

                    {/* 2. model */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Model</span>
                        </label>
                        <input type="text" name="model" onChange={handleModelChange} defaultValue={update.model || ''} placeholder="Update Model"   className="input input-bordered w-full " />
                    </div>

                    {/* 3. brand */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Brand</span>
                        </label>
                        <input type="text" name="brand" onChange={handleBrandChange} defaultValue={update.brand || ''} placeholder="Update Brand"   className="input input-bordered w-full " />
                    </div>
                    
                    {/* 4. price */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" name="price" onChange={handlePriceChange} defaultValue={update.price || ''} placeholder="Update Price"   className="input input-bordered w-full " />
                    </div>

                    {/* 5. processor */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Processor</span>
                        </label>
                        <input type="text" name="processor" onChange={handleProcessorChange} defaultValue={update.processor || ''} placeholder="Update Processor"   className="input input-bordered w-full " />
                    </div>
                    
                    {/* 6. ram */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Ram</span>
                        </label>
                        <input type="text" name="ram" onChange={handleRamChange} defaultValue={update.ram || ''} placeholder="Update Ram"   className="input input-bordered w-full " />
                    </div>

                    {/* 7. ramtype */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Ram Type</span>
                        </label>
                        <input type="text" name="ramtype" onChange={handleRamtypeChange} defaultValue={update.ramtype || ''} placeholder="Update Ram Type"   className="input input-bordered w-full " />
                    </div>

                    {/* 8. display */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Display</span>
                        </label>
                        <input type="text" name="display" onChange={handleDisplayChange} defaultValue={update.display || ''} placeholder="Update Display"   className="input input-bordered w-full " />
                    </div>

                    {/* 9. storagecapacity */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Storage Capacity</span>
                        </label>
                        <input type="text" name="storagecapacity" onChange={handleStoragecapacityChange} defaultValue={update.storagecapacity || ''} placeholder="Update Storage Capacity"   className="input input-bordered w-full " />
                    </div>

                    {/* 10. graphics */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Graphics</span>
                        </label>
                        <input type="text" name="graphics" onChange={handleGraphicsChange} defaultValue={update.graphics || ''} placeholder="Update Graphics"   className="input input-bordered w-full " />
                    </div>

                    {/* 11. keyboard */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Keyboard</span>
                        </label>
                        <input type="text" name="keyboard" onChange={handleKeyboardChange} defaultValue={update.keyboard || ''} placeholder="Update Keyboard"   className="input input-bordered w-full " />
                    </div>

                    {/* 12. camera */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Camera</span>
                        </label>
                        <input type="text" name="camera" onChange={handleCameraChange} defaultValue={update.camera || ''} placeholder="Update Camera"   className="input input-bordered w-full " />
                    </div>

                    {/* 13. speaker */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Speaker</span>
                        </label>
                        <input type="text" name="speaker" onChange={handleSpeakerChange} defaultValue={update.speaker || ''} placeholder="Update Speaker"   className="input input-bordered w-full " />
                    </div>

                    {/* 14. audio */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Audio</span>
                        </label>
                        <input type="text" name="audio" onChange={handleAudioChange} defaultValue={update.audio || ''} placeholder="Update Audio"   className="input input-bordered w-full " />
                    </div>

                    {/* 15. network */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Network</span>
                        </label>
                        <input type="text" name="network" onChange={handleNetworkChange} defaultValue={update.network || ''} placeholder="Update Network"   className="input input-bordered w-full " />
                    </div>

                    {/* 15. os */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Os</span>
                        </label>
                        <input type="text" name="os" onChange={handleOsChange} defaultValue={update.os || ''} placeholder="Update Os"   className="input input-bordered w-full " />
                    </div>

                    {/* 16. weight */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Weight</span>
                        </label>
                        <input type="text" name="weight" onChange={handleWeightChange} defaultValue={update.weight || ''} placeholder="Update Weight"   className="input input-bordered w-full " />
                    </div>

                    {/* 17. warranty */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Warranty</span>
                        </label>
                        <input type="text" name="warranty" onChange={handleWarrantyChange} defaultValue={update.warranty || ''} placeholder="Update Warranty"   className="input input-bordered w-full " />
                    </div>

                </div>
                {/* 18. Description */}
                <div className="form-control w-full mb-2">
                    <label className="label">
                        <span className="label-text font-semibold">Description</span>
                    </label>
                    <textarea type="text" name="description" onChange={handleDescriptionChange} defaultValue={update.description || ''} placeholder="Update Description"   className="textarea textarea-bordered h-24 w-full " />
                </div>
                {/* submit button */}
                <button style={{backgroundColor: '#212E52'}}  className="btn  px-5 mt-5 text-white btn-outline btn-active btn-sm md:btn-md lg:btn-md"  type="submit"> <RxUpdate></RxUpdate> Update</button>
            </form>
        </div>
    );
};

export default UpdateProduct;