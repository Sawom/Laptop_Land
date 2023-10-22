import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const [update, setUpdate] = useState({});
    const {id} = useParams();

    // single data load
    useEffect( ()=>{
        fetch(`http://localhost:5000/laptop/${id}`)
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
        const url = `http://localhost:5000/laptop/${id}` ;
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
            <section className='text-center mb-10 ' > 
                <p className='text-xl' > <span className=' py-4 border-y-4 uppercase lg:text-3xl md:text-2xl text-xl font-bold' > Update  ITEM </span> </p>
                <br />
                <p>Update Laptop model for : <span className='font-bold'>{update.model}</span>   </p>
            </section>
            {/* form */}
            <form className='px-5' onSubmit={handleUpdate} >
                <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-3'>
                    {/* 1. code */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name</span>
                        </label>
                        <input type="text" name="name" onChange={handleCodeChange} defaultValue={update.name || ''} placeholder="Recipe name"   className="input input-bordered w-full " />
                    </div>
                    {/* 2. model */}
                    <div className="form-control w-full mb-2">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name</span>
                        </label>
                        <input type="text" name="name" onChange={handleModelChange} defaultValue={update.name || ''} placeholder="Recipe name"   className="input input-bordered w-full " />
                    </div>



                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;