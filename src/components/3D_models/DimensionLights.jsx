const DimensionLights = () => {
  return (
   <>
   <ambientLight intensity={0.2} color="#1a1a40"/>
   
         <directionalLight position={[5, 5, 5]} intensity={4} />

   <spotLight
   position={[2, 5, 6]}
   angle={0.15}
   penumbra={0.2}
   intensity={100}
   color={"#a0e8c7"}
   />

   <spotLight
   position={[4, 5, 4]}
   angle={0.3}
   penumbra={0.5}
   intensity={40}
   color={"#85f2c0"}
   />

   <spotLight
   position={[-3, 5, 5]}
   angle={0.4}
   penumbra={1}
   intensity={60}
   color={"#6ce0cf"}
   />
   
   </>
  )
}

export default DimensionLights