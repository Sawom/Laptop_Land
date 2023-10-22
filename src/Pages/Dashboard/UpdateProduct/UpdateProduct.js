import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    // update code
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

    // update model
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

    // update brand
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

    // update price
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

    // update processor
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

    // update ram
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

    // update ramtype
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

    // update display
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

    // update storagecapacity
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

    // update graphics
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

    // update keyboard
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

    // update camera
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

    // update speaker
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








    return (
        <div  className='container mx-auto'>
            <section className='text-center mb-10 ' > 
                <p className='text-xl' > <span className=' py-4 border-y-4 uppercase' > Update  ITEM </span> </p>
                <br />
                <p>Update Laptop model for : <span className='font-bold'>{update.model}</span>   </p>
            </section>

        </div>
    );
};

export default UpdateProduct;