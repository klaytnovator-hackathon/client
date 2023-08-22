import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

const McLarenP1 = (props: any) => {
  const { nodes, materials }: any = useGLTF('/assets/models/mc-laren/mc-laren.gltf')
  const { config } = props

  const brakeDiskColor = useMemo(() => {
    switch (config.brakeDisk) {
      case 'ceramic':
        return '#ffffff'
      case 'carbon':
        return '#333333'
      default:
        return '#bdbdbd'
    }
  }, [config.brakeDisk])

  return (
    <group {...props} position={[0, -1, -0.5]} rotation={[0, 0.7, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.75}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-36.41, 14.32, 53.21]}>
            <mesh geometry={nodes.Rim_RF1_SUB1_Details_0.geometry} material={materials.Details} material-color={config?.rim === 'white' ? '#fff' : '#000'} />
            <mesh geometry={nodes.Rim_RF1_SUB0_Rim_0.geometry} material={materials.material} material-color={config?.rim === 'white' ? '#fff' : '#000'} />
            <mesh geometry={nodes.Tyre_RF_2_Tyre_0.geometry} material={materials.Tyre} />
          </group>
          <group position={[-36.41, 14.32, 53.21]}>
            <group position={[1.8, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh
                geometry={nodes.g_Susp_Hub_RF_SUB1_Brake_Caliper_0.geometry}
                material={materials.Brake_Caliper}
                material-color={config.caliper === 'brembo' ? 'red' : 'yellow'}
                visible
              />
              <mesh geometry={nodes.g_Susp_Hub_RF_SUB0_Mechanicals_0.geometry} material={materials.Mechanicals} />
              <mesh geometry={nodes.g_Susp_Hub_RF_SUB2_Details_0.geometry} material={materials.Details} />
            </group>
          </group>
          <group position={[0, 5.56, 46.33]}>
            <group position={[0, 9.03, 27.48]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh geometry={nodes.g_Bumper_F_SUB0_Carbon_Mult50_0.geometry} material={materials.Carbon_Mult50} />
              <mesh geometry={nodes.g_Bumper_F_SUB1_Matte_Black_0.geometry} material={materials.Matte_Black} />
            </group>
          </group>
          <mesh
            geometry={nodes.Brake_Disk_RR_2_Brake_Disk_0.geometry}
            material={materials.Brake_Disk}
            material-color={brakeDiskColor}
            position={[-34.81, 15.46, -65.08]}
          />
          <mesh
            geometry={nodes.g_Susp_ALever_Top_LR_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[21.79, 20.86, -65.13]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.g_Susp_ALever_Top_RR_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[-21.79, 20.86, -65.13]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[34.81, 15.46, -65.08]}>
            <mesh geometry={nodes.Rim_LR1_SUB1_Details_0.geometry} material={materials.Details} />
            <mesh geometry={nodes.Rim_LR1_SUB0_Rim_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Tyre_LR_2_Tyre_0.geometry} material={materials.Tyre} />
          </group>
          <mesh
            geometry={nodes.g_Susp_ALever_Btm_LF_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[17.24, 8.65, 58.01]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[0, 47.61, -27.71]}>
            <group position={[0, -4.71, -16.1]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh geometry={nodes.g_Window_B_SUB1_Windows_0.geometry} material={materials.Windows} />
              <mesh geometry={nodes.g_Window_B_SUB0_Windows_alpha_0.geometry} material={materials.Windows_alpha} />
            </group>
          </group>
          <group position={[36.41, 14.32, 53.21]}>
            <group position={[-1.8, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh
                geometry={nodes.g_Susp_Hub_LF_SUB1_Brake_Caliper_0.geometry}
                material={materials.Brake_Caliper}
                material-color={config.caliper === 'brembo' ? 'red' : 'yellow'}
                visible
              />
              <mesh geometry={nodes.g_Susp_Hub_LF_SUB0_Mechanicals_0.geometry} material={materials.Mechanicals} />
              <mesh geometry={nodes.g_Susp_Hub_LF_SUB2_Details_0.geometry} material={materials.Details} />
            </group>
          </group>
          <group position={[36.41, 14.32, 53.21]}>
            <mesh geometry={nodes.Rim_LF1_SUB1_Details_0.geometry} material={materials.Details} />
            <mesh geometry={nodes.Rim_LF1_SUB0_Rim_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Tyre_LF_2_Tyre_0.geometry} material={materials.Tyre} />
          </group>
          <group position={[-18.1, 49.45, 8.91]} rotation={[-3.06, -1.13, 2.87]}>
            <group position={[-15.04, -4.19, -32.67]} rotation={[-0.67, 0.78, 0.4]}>
              <group position={[40.89, -4.64, -0.14]} rotation={[-0.59, 0.86, -2.81]}>
                <mesh
                  geometry={nodes.polymsh_detached93_2_INT_Decals_REF_spec_0.geometry}
                  material={materials.INT_Decals_REF_spec}
                  position={[36.3, 55.76, 3.48]}
                  rotation={[0.84, -0.12, -3.01]}
                />
              </group>
              <group position={[34.68, -10.11, -9.26]} rotation={[-2.82, 0.37, 0.97]}>
                <mesh geometry={nodes.Cylinder7_SUB0_INT_Decals_REF_GLOSS_0.geometry} material={materials.INT_Decals_REF_GLOSS} />
                <mesh geometry={nodes.Cylinder7_SUB1_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
              </group>
              <mesh
                geometry={nodes.polymsh6_2_INT_Decals_REF_GLOSS_0.geometry}
                material={materials.INT_Decals_REF_GLOSS}
                position={[35.2, -7.12, -2.33]}
                rotation={[-3.09, 1.12, 1.77]}
              />
              <group position={[2.58, 9.63, 52.47]} rotation={[-2.21, 1.07, 0.78]}>
                <group position={[67.54, 43.78, -10.49]} rotation={[0.82, 0, 1.57]}>
                  <mesh
                    geometry={nodes.polymsh_extracted_SUB0_Windows_alpha_0.geometry}
                    material-color={config.windshield}
                    material={materials.Windows_alpha}
                  />
                  <mesh geometry={nodes.polymsh_extracted_SUB1_Windows_0.geometry} material={materials.Windows} />
                </group>
                <mesh geometry={nodes.GEO_DOOR_L_SUB5_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB8_INT_Decals_FLAT_0.geometry} material={materials.INT_Decals_FLAT} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB3_INT_Velvet_0.geometry} material={materials.INT_Velvet} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB4_INT_PLASTIC_Speakers_0.geometry} material={materials.INT_PLASTIC_Speakers} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB0_INT_carbon_0.geometry} material={materials.INT_carbon} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB7_INT_METAL_Aluminium_0.geometry} material={materials.INT_METAL_Aluminium} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB2_INT_PLASTIC_Black_0.geometry} material={materials.INT_PLASTIC_Black} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB6_INT_PLASTIC_Rubber_0.geometry} material={materials.INT_PLASTIC_Rubber} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB1_Matte_Black_0.geometry} material={materials.Matte_Black} />
                <mesh geometry={nodes.GEO_DOOR_L_SUB9_INT_Decals_REF_AT_GLOSS_0.geometry} material={materials.INT_Decals_REF_AT_GLOSS} />
              </group>
            </group>
            <mesh geometry={nodes.GEO_DOOR_RR_SUB4_Mirror_0.geometry} material={materials.Mirror} />
            <mesh geometry={nodes.GEO_DOOR_RR_SUB3_Windows_0.geometry} material={materials.Windows} />
            <mesh geometry={nodes.GEO_DOOR_RR_SUB2_Windows_alpha_0.geometry} material={materials.Windows_alpha} />
            <mesh geometry={nodes.GEO_DOOR_RR_SUB5_Carbon_Mult50_0.geometry} material={materials.Carbon_Mult50} />
            <mesh geometry={nodes.GEO_DOOR_RR_SUB1_Carpaint_Black_0.geometry} material={materials.Carpaint_Black} material-color={props.config?.mainColor} />
            <mesh geometry={nodes.GEO_DOOR_RR_SUB0_Carpaint_0.geometry} material={materials.Carpaint} material-color={props.config?.mainColor} />
          </group>
          <group position={[18.1, 49.45, 8.91]} rotation={[-0.38, -1.01, -0.68]}>
            <group position={[-15.03, -12.05, 30.66]} rotation={[0.57, -0.85, 0.15]}>
              <group position={[40.89, -4.54, -0.96]} rotation={[2.02, 0.88, 2.43]}>
                <mesh
                  geometry={nodes.polymsh_detached94_2_INT_Decals_REF_spec_0.geometry}
                  material={materials.INT_Decals_REF_spec}
                  position={[-35.3, 55.72, -9.39]}
                  rotation={[0.84, -0.12, -3.01]}
                />
              </group>
              <group position={[34.68, -12.02, 6.61]} rotation={[0.16, 0.51, 2.06]}>
                <mesh geometry={nodes.Cylinder6_SUB0_INT_Decals_REF_GLOSS_0.geometry} material={materials.INT_Decals_REF_GLOSS} />
                <mesh geometry={nodes.Cylinder6_SUB1_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
              </group>
              <mesh
                geometry={nodes.polymsh54_2_INT_Decals_REF_GLOSS_0.geometry}
                material={materials.INT_Decals_REF_GLOSS}
                position={[35.2, -7.47, 0.58]}
                rotation={[-0.38, 1.06, 1.75]}
              />
              <group position={[2.58, 21.76, -48.7]} rotation={[-0.7, 1.07, 2.37]}>
                <mesh geometry={nodes.GEO_DOOR_R1_SUB7_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB6_INT_Decals_FLAT_0.geometry} material={materials.INT_Decals_FLAT} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB4_INT_Velvet_0.geometry} material={materials.INT_Velvet} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB5_INT_PLASTIC_Speakers_0.geometry} material={materials.INT_PLASTIC_Speakers} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB2_INT_carbon_0.geometry} material={materials.INT_carbon} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB0_INT_PLASTIC_Black_0.geometry} material={materials.INT_PLASTIC_Black} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB1_INT_PLASTIC_Rubber_0.geometry} material={materials.INT_PLASTIC_Rubber} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB3_Matte_Black_0.geometry} material={materials.Matte_Black} />
                <mesh geometry={nodes.GEO_DOOR_R1_SUB8_INT_Decals_REF_AT_GLOSS_0.geometry} material={materials.INT_Decals_REF_AT_GLOSS} />
                <mesh geometry={nodes.polymsh_extracted11_SUB0_Windows_alpha_0.geometry} material={materials.Windows_alpha} />
                <mesh geometry={nodes.polymsh_extracted11_SUB1_Windows_0.geometry} material={materials.Windows} />
              </group>
            </group>
            <mesh geometry={nodes.polymsh5_SUB2_Mirror_0.geometry} material={materials.Mirror} />
            <mesh geometry={nodes.polymsh5_SUB4_Windows_0.geometry} material={materials.Windows} />
            <mesh geometry={nodes.polymsh5_SUB5_Windows_alpha_0.geometry} material={materials.Windows_alpha} />
            <mesh geometry={nodes.polymsh5_SUB3_Carbon_Mult50_0.geometry} material={materials.Carbon_Mult50} />
            <mesh geometry={nodes.polymsh5_SUB1_Carpaint_Black_0.geometry} material={materials.Carpaint_Black} material-color={props.config.mainColor} />
            <mesh geometry={nodes.polymsh5_SUB0_Carpaint_0.geometry} material={materials.Carpaint} material-color={props.config.mainColor} />
          </group>
          <group position={[-34.81, 15.46, -65.08]}>
            <group position={[1.82, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh
                geometry={nodes.g_Susp_Hub_RR_SUB1_Brake_Caliper_0.geometry}
                material={materials.Brake_Caliper}
                material-color={config.caliper === 'brembo' ? 'red' : 'yellow'}
                visible
              />
              <mesh geometry={nodes.g_Susp_Hub_RR_SUB0_Mechanicals_0.geometry} material={materials.Mechanicals} />
              <mesh geometry={nodes.g_Susp_Hub_RR_SUB2_Details_0.geometry} material={materials.Details} />
            </group>
          </group>
          <group position={[0, 23.05, 73.38]}>
            <mesh
              geometry={nodes.LIGHT_0_2_Headlights_0.geometry}
              material={materials.Headlights}
              position={[0, 2.54, 4.86]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
            <mesh geometry={nodes.LIGHT_1_2_Headlights_0.geometry} material={materials.Headlights} position={[0, -23.05, -73.38]} />
          </group>
          <mesh
            geometry={nodes.g_Susp_ALever_Btm_LR_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[15.64, 7.72, -69.88]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[0, 19.85, -81.62]} rotation={[-0.42, Math.PI / 2, 0]}>
            <group position={[32.68, -512.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh geometry={nodes.g_Wing_Guide_SUB0_Chrome_0.geometry} material={materials.Chrome} />
              <mesh geometry={nodes.g_Wing_Guide_SUB2_Plastics_0.geometry} material={materials.Plastics} />
              <mesh geometry={nodes.g_Wing_Guide_SUB1_Details_0.geometry} material={materials.Details} />
            </group>
            <group position={[0.02, 6.35, 0]}>
              <group position={[-2.64, 1.34, 0]} rotation={[0, 0, -0.47]}>
                <group rotation={[0, 0, 0.9]}>
                  <mesh geometry={nodes.g_Wing_SUB1_Chrome_0.geometry} material={materials.Chrome} />
                  <mesh geometry={nodes.g_Wing_SUB3_Details_0.geometry} material={materials.Details} />
                  <mesh geometry={nodes.g_Wing_SUB2_Carpaint_0.geometry} material={materials.Carpaint} material-color={props.config.mainColor} />
                  <mesh geometry={nodes.g_Wing_SUB0_Matte_Black_0.geometry} material={materials.Matte_Black} />
                </group>
              </group>
              <mesh geometry={nodes.g_Wing_Turn_SUB0_Chrome_0.geometry} material={materials.Chrome} />
              <mesh geometry={nodes.g_Wing_Turn_SUB1_Plastics_0.geometry} material={materials.Plastics} />
            </group>
          </group>
          <mesh
            geometry={nodes.g_Susp_ALever_Top_LF_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[23.39, 20.92, 53.26]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            geometry={nodes.g_Susp_ALever_Btm_RR_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[-15.64, 7.72, -69.88]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[34.81, 15.46, -65.08]}>
            <group position={[-1.82, 0, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
              <mesh
                geometry={nodes.g_Susp_Hub_LR_SUB1_Brake_Caliper_0.geometry}
                material={materials.Brake_Caliper}
                material-color={config.caliper === 'brembo' ? 'red' : 'yellow'}
                visible
              />
              <mesh geometry={nodes.g_Susp_Hub_LR_SUB0_Mechanicals_0.geometry} material={materials.Mechanicals} />
              <mesh geometry={nodes.g_Susp_Hub_LR_SUB2_Details_0.geometry} material={materials.Details} />
            </group>
          </group>
          <mesh
            geometry={nodes.g_Susp_ALever_Btm_RF_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[-17.24, 8.65, 58.01]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <group position={[0, 5.31, -58.55]}>
            <mesh
              geometry={nodes.g_Diffuser_2_INT_carbon_0.geometry}
              material={materials.INT_carbon}
              position={[0, 4.38, -20.6]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            />
          </group>
          <mesh geometry={nodes.Brake_Disk_LF_2_Brake_Disk_0.geometry} material={materials.Brake_Disk} position={[36.41, 14.32, 53.21]} />
          <group position={[14.27, 31.38, 60.94]} rotation={[0.48, 0.05, -0.08]}>
            <mesh geometry={nodes.GEO_WIPER3_2_Plastics_0.geometry} material={materials.Plastics} position={[-1.21, 0, 0.04]} rotation={[3, 0.38, 3.08]} />
            <group position={[-30.18, -4.1, -12.75]} rotation={[0.12, -0.63, 0.25]}>
              <group position={[-0.99, 0.18, -1.2]} rotation={[0.12, 0, 0]}>
                <mesh
                  geometry={nodes.polymsh_detached_2_Plastics_0.geometry}
                  material={materials.Plastics}
                  position={[-7.03, -58.7, -22.02]}
                  rotation={[-0.67, 0.57, 0.19]}
                />
              </group>
              <mesh
                geometry={nodes.GEO_WIPER2_2_Plastics_0.geometry}
                material={materials.Plastics}
                position={[-0.36, -0.09, 1.04]}
                rotation={[-1.66, -0.04, 1.59]}
              />
            </group>
            <mesh
              geometry={nodes.GEO_WIPER1_2_Plastics_0.geometry}
              material={materials.Plastics}
              position={[-0.02, -0.44, -0.1]}
              rotation={[-1.53, 0.01, 1.5]}
            />
          </group>
          <group position={[0, 14.29, 53.21]} rotation={[0, Math.PI / 2, 0]}>
            <mesh geometry={nodes.g_Body_SUB6_Chrome_0.geometry} material={materials.Chrome} />
            <mesh geometry={nodes.g_Body_SUB7_Clear_Glass_0.geometry} material={materials.Clear_Glass} />
            <mesh geometry={nodes.g_Body_SUB3_Plastics_0.geometry} material={materials.Plastics} />
            <mesh geometry={nodes.g_Body_SUB13_Taillights_0.geometry} material={materials.Taillights} />
            <mesh geometry={nodes.g_Body_SUB0_Windows_0.geometry} material={materials.Windows} />
            <mesh geometry={nodes.g_Body_SUB12_Mechanicals_0.geometry} material={materials.Mechanicals} />
            <mesh geometry={nodes.g_Body_SUB10_Details_0.geometry} material={materials.Details} />
            <mesh geometry={nodes.g_Body_SUB4_Carpaint_Black_0.geometry} material={materials.Carpaint_Black} material-color={props.config.mainColor} />
            <mesh geometry={nodes.g_Body_SUB5_Carbon_Mult50_0.geometry} material={materials.Carbon_Mult50} />
            <mesh geometry={nodes.g_Body_SUB1_Carpaint_Black_0.geometry} material={materials.Carpaint_Black} material-color={props.config.mainColor} />
            <mesh geometry={nodes.g_Body_SUB2_Carpaint_0.geometry} material={materials.Carpaint} material-color={props.config.mainColor} />
            <mesh geometry={nodes.g_Body_SUB11_Matte_Black_0.geometry} material={materials.Matte_Black} />
            <mesh geometry={nodes.g_Body_SUB9_Grid2_0.geometry} material={materials.Grid2} />
            <mesh geometry={nodes.g_Body_SUB8_Grid1_Mult70_0.geometry} material={materials.Grid1_Mult70} />
          </group>
          <group position={[0, 33.86, 46.54]}>
            <group position={[0, -8.01, 26.45]} rotation={[0, Math.PI / 2, 0]}>
              <mesh geometry={nodes.GEO_HOOD_SUB2_Details_0.geometry} material={materials.Details} />
              <mesh geometry={nodes.GEO_HOOD_SUB0_Carpaint_0.geometry} material={materials.Carpaint} material-color={props.config.mainColor} />
              <mesh geometry={nodes.GEO_HOOD_SUB1_Matte_Black_0.geometry} material={materials.Matte_Black} />
            </group>
          </group>
          <mesh
            geometry={nodes.Brake_Disk_RF_2_Brake_Disk_0.geometry}
            material={materials.Brake_Disk}
            material-color='white'
            position={[-36.41, 14.32, 53.21]}
          />
          <group position={[-34.81, 15.46, -65.08]}>
            <mesh geometry={nodes.Rim_RR1_SUB1_Details_0.geometry} material={materials.Details} />
            <mesh geometry={nodes.Rim_RR1_SUB0_Rim_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Tyre_RR_2_Tyre_0.geometry} material={materials.Tyre} />
          </group>
          <mesh
            geometry={nodes.g_Susp_ALever_Top_RF_2_Mechanicals_0.geometry}
            material={materials.Mechanicals}
            position={[-23.39, 20.92, 53.26]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh geometry={nodes.Brake_Disk_LR_2_Brake_Disk_0.geometry} material={materials.Brake_Disk} position={[34.81, 15.46, -65.08]} />
          <mesh geometry={nodes.LIGHT_BRAKE_3_2_Taillights_0.geometry} material={materials.Taillights} />
          <mesh geometry={nodes.LIGHT_BRAKE_REAR_2_Taillights_0.geometry} material={materials.Taillights} />
          <mesh geometry={nodes.LIGHT_BRAKE_2_2_Taillights_0.geometry} material={materials.Taillights} />
          <mesh geometry={nodes.LIGHT_BRAKE_0_2_Taillights_0.geometry} material={materials.Taillights} />
          <mesh geometry={nodes.LIGHT_BRAKE_1_2_Taillights_0.geometry} material={materials.Taillights} />
          <mesh geometry={nodes.polymsh_extracted12_2_Windows_alpha_0.geometry} material={materials.Windows_alpha} />
          <mesh
            geometry={nodes.Cylinder5_2_INT_Decals_REF_spec_0.geometry}
            material={materials.INT_Decals_REF_spec}
            position={[37.69, 28.7, 40.37]}
            rotation={[-1.83, 0.26, 0.08]}
          />
          <mesh
            geometry={nodes.Cylinder4_2_INT_Decals_REF_spec_0.geometry}
            material={materials.INT_Decals_REF_spec}
            position={[-37.69, 28.7, 40.37]}
            rotation={[-1.8, -0.01, -0.07]}
          />
          <group position={[14.09, 30.85, 17.77]} rotation={[0.22, 0, 0]}>
            <group position={[2.93, 0.03, 4.92]} rotation={[-0.02, -0.11, 0]}>
              <group position={[-17.02, -33.69, -16.23]} rotation={[-0.2, 0, 0]}>
                <mesh geometry={nodes.GEO_PAD_L_SUB1_INT_Decals_FLAT_0.geometry} material={materials.INT_Decals_FLAT} />
                <mesh geometry={nodes.GEO_PAD_L_SUB0_INT_carbon_0.geometry} material={materials.INT_carbon} />
              </group>
            </group>
            <group position={[-2.77, 0.03, 4.92]} rotation={[-0.02, 0.09, 0]}>
              <group position={[-11.32, -33.69, -16.23]} rotation={[-0.2, 0, 0]}>
                <mesh geometry={nodes.GEO_PAD_R_SUB1_INT_Decals_FLAT_0.geometry} material={materials.INT_Decals_FLAT} />
                <mesh geometry={nodes.GEO_PAD_R_SUB0_INT_carbon_0.geometry} material={materials.INT_carbon} />
              </group>
            </group>
            <mesh geometry={nodes.GEO_STEER1_SUB4_INT_Decals_REF_GLOSS_0.geometry} material={materials.INT_Decals_REF_GLOSS} />
            <mesh geometry={nodes.GEO_STEER1_SUB6_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
            <mesh geometry={nodes.GEO_STEER1_SUB7_INT_Decals_FLAT_0.geometry} material={materials.INT_Decals_FLAT} />
            <mesh geometry={nodes.GEO_STEER1_SUB1_INT_Skin_A_0.geometry} material={materials.INT_Skin_A} />
            <mesh geometry={nodes.GEO_STEER1_SUB0_INT_Velvet_0.geometry} material={materials.INT_Velvet} />
            <mesh geometry={nodes.GEO_STEER1_SUB2_INT_carbon_0.geometry} material={materials.INT_carbon} />
            <mesh geometry={nodes.GEO_STEER1_SUB3_INT_METAL_Aluminium_0.geometry} material={materials.INT_METAL_Aluminium} />
            <mesh geometry={nodes.GEO_STEER1_SUB5_INT_PLASTIC_Black_0.geometry} material={materials.INT_PLASTIC_Black} />
            <mesh geometry={nodes.GEO_STEER1_SUB8_INT_Cuciture_0.geometry} material={materials.INT_Cuciture} />
          </group>
          <mesh geometry={nodes.polymsh_extracted10_2_Clear_Glass_0.geometry} material={materials.Clear_Glass} />
          <mesh geometry={nodes.LED_CHARGE_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_CHARGE_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_CHARGE_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_CHARGE_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_FUEL_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_FUEL_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_FUEL_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_FUEL_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.GEO_Seats_SUB5_INT_Decals_REF_GLOSS_0.geometry} material={materials.INT_Decals_REF_GLOSS} />
          <mesh geometry={nodes.GEO_Seats_SUB4_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
          <mesh geometry={nodes.GEO_Seats_SUB0_INT_Skin_A_0.geometry} material={materials.INT_Skin_A} />
          <mesh geometry={nodes.GEO_Seats_SUB1_INT_Velvet_0.geometry} material={materials.INT_Velvet} />
          <mesh geometry={nodes.GEO_Seats_SUB2_INT_carbon_0.geometry} material={materials.INT_carbon} />
          <mesh geometry={nodes.GEO_Seats_SUB3_INT_PLASTIC_Black_0.geometry} material={materials.INT_PLASTIC_Black} />
          <mesh geometry={nodes.GEO_Seats_SUB6_INT_Cuciture_0.geometry} material={materials.INT_Cuciture} />
          <mesh geometry={nodes.CINTURE_OFF_SUB1_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
          <mesh geometry={nodes.CINTURE_OFF_SUB0_IN_Cinture_0.geometry} material={materials.IN_Cinture} />
          <mesh geometry={nodes.CINTURE_OFF_SUB2_INT_METAL_Aluminium_0.geometry} material={materials.INT_METAL_Aluminium} />
          <mesh geometry={nodes.CINTURE_ON_SUB2_INT_Decals_REF_GLOSS_0.geometry} material={materials.INT_Decals_REF_GLOSS} />
          <mesh geometry={nodes.CINTURE_ON_SUB0_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
          <mesh geometry={nodes.CINTURE_ON_SUB1_IN_Cinture_0.geometry} material={materials.IN_Cinture} />
          <mesh geometry={nodes.polymsh_SUB9_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.polymsh_SUB2_INT_Decals_REF_GLOSS_0.geometry} material={materials.INT_Decals_REF_GLOSS} />
          <mesh geometry={nodes.polymsh_SUB7_INT_Decals_REF_spec_0.geometry} material={materials.INT_Decals_REF_spec} />
          <mesh geometry={nodes.polymsh_SUB10_Mirror_0.geometry} material={materials.Mirror} />
          <mesh geometry={nodes.polymsh_SUB11_INT_Decals_FLAT_0.geometry} material={materials.INT_Decals_FLAT} />
          <mesh geometry={nodes.polymsh_SUB8_INT_Carpet_0.geometry} material={materials.INT_Carpet} />
          <mesh geometry={nodes.polymsh_SUB5_INT_Velvet_0.geometry} material={materials.INT_Velvet} />
          <mesh geometry={nodes.polymsh_SUB1_INT_carbon_0.geometry} material={materials.INT_carbon} />
          <mesh geometry={nodes.polymsh_SUB6_INT_METAL_Aluminium_0.geometry} material={materials.INT_METAL_Aluminium} />
          <mesh geometry={nodes.polymsh_SUB0_INT_PLASTIC_Black_0.geometry} material={materials.INT_PLASTIC_Black} />
          <mesh geometry={nodes.polymsh_SUB4_INT_PLASTIC_Rubber_0.geometry} material={materials.INT_PLASTIC_Rubber} />
          <mesh geometry={nodes.polymsh_SUB3_Matte_Black_0.geometry} material={materials.Matte_Black} />
          <mesh geometry={nodes.polymsh_SUB12_INT_Decals_REF_AT_GLOSS_0.geometry} material={materials.INT_Decals_REF_AT_GLOSS} />
          <mesh geometry={nodes.DRS_Tag_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.DRS_Tag_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.DRS_Tag_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.IPAS_Tag_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.IPAS_Tag_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.IPAS_Tag_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.IPAS_Tag_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.DRS_Tag_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_BATTERY_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_BATTERY_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_BATTERY_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_BATTERY_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_WATER_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_WATER_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_WATER_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_WATER_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_OIL_0_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_OIL_1_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_OIL_2_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.LED_OIL_3_2_INT_DISPLAY_0.geometry} material={materials.INT_DISPLAY} />
          <mesh geometry={nodes.GEO_frontFender_2_Carpaint_0.geometry} material={materials.Carpaint} material-color={props.config.mainColor} />
          <mesh geometry={nodes.polymsh_detached73_SUB0_Windows_0.geometry} material={materials.Windows} />
          <mesh geometry={nodes.polymsh_detached73_SUB1_Windows_alpha_0.geometry} material={materials.Windows_alpha} />
        </group>
      </group>
    </group>
  )
}

export default McLarenP1
