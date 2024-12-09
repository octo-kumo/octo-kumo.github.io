var fe=Object.defineProperty;var ue=(r,e,t)=>e in r?fe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var l=(r,e,t)=>ue(r,typeof e!="symbol"?e+"":e,t);import{G as be,T as me,M as y,a as we,I as Se,V as _,O as I,b as Le,W as Me,P as oe,c as le,R as Y,B as G,C as E,D as ne,d as Z,e as Ce,f as $,L as De,g as ve,h as J,i as ye,j as ke,k as Ee,l as W,S as j,m as Q,n as xe,o as Ae,p as Ie,q as Re,r as Oe,F as Pe,A as Te,s as Ne,H as Be,t as Fe,u as He,v as Ue,w as ze}from"./CCjz8wbS.js";import{d as Ge,b as We,w as je,e as qe,o as Xe,c as Ve}from"./DAx6CmOR.js";import{_ as Ye}from"./DlAUqK2U.js";function Ze(r){return function(){r|=0,r=r+2654435769|0;let e=r^r>>>16;return e=Math.imul(e,569420461),e=e^e>>>15,e=Math.imul(e,1935289751),((e=e^e>>>15)>>>0)/4294967296}}function $e(r){return Ze(r^3735928559)}const q=new y;q.setPosition(99999,99999,99999);const P={},T={},N={},L={};let S,v;const Je=new be,Qe=new me,ce="/projects/assets/c0/";function K(r){return T[r]??(T[r]=Qe.loadAsync(ce+r))}function Ke(r){v=r}function X(r){r instanceof we?v==null||v.setupMaterial(r):Array.isArray(r)&&r.forEach(e=>{v==null||v.setupMaterial(e)})}function et(r){S=r;const e=Object.values(L).flatMap(t=>t.meshes);e.length>0&&S.add(...e)}function he(r,e=!1,t=!1){return P[r]??(P[r]=Je.loadAsync(ce+r).then(i=>(i.scene.traverse(a=>{if(a.type==="Mesh"){const s=a;s.receiveShadow=e,s.castShadow=t,X(s.material)}}),i)))}async function ee(r){var i;const e=L[r],t=e!=null&&e.capacity?(e==null?void 0:e.capacity)*2:1;return(i=N[r]??(N[r]={}))[t]??(i[t]=async function(){const a=await he(r),s={capacity:t,count:(e==null?void 0:e.count)??0,meshes:[],offsets:[]};if(a.scene.traverse(n=>{if(n.type==="Mesh"){const c=n;X(c.material);const o=new Se(c.geometry,c.material,t),g=new _;n.getWorldPosition(g),s.offsets.push(g),s.meshes.push(o),o.castShadow=!0,o.receiveShadow=!0,S==null||S.add(o)}}),e){let n=new y;if(s.meshes.length!==e.meshes.length)throw new Error("Mesh length mismatch during expansion!");for(let c=0;c<s.meshes.length;c++){for(let o=0;o<e.count;o++)e.meshes[c].getMatrixAt(o,n),s.meshes[c].setMatrixAt(o,n);for(let o=e.count;o<t;o++)s.meshes[c].setMatrixAt(o,q)}S==null||S.remove(...e.meshes),e.meshes.forEach(c=>c.dispose()),e.meshes=[]}else for(let n=0;n<s.meshes.length;n++)for(let c=0;c<t;c++)s.meshes[n].setMatrixAt(c,q);return L[r]=s}())}async function tt(r){L[r]||(L[r]=await ee(r));const e=L[r].count++;for(;e>=L[r].capacity;)await ee(r);return e}async function de(r){const e=await tt(r);return t=>{var i;(i=L[r])==null||i.meshes.forEach(a=>{a.setMatrixAt(e,t)})}}class it{constructor(e,t,i,a,s,n){l(this,"r");l(this,"width");l(this,"parent");l(this,"height");l(this,"tiles");l(this,"objects");this.parent=e,this.width=t,this.height=i,this.tiles=a,this.objects=s,this.r=n}}class st extends I{constructor(t,i="ground_grass.glb",a=0){super();l(this,"_update");l(this,"height",0);l(this,"tname");this.tname=i,this.position.copy(t),this.rotateY(a),this.load()}async load(){this._update=await de(this.tname),this.update()}update(){this._update&&(this.updateMatrix(),this._update(this.matrix))}}class te extends I{constructor(t,i=new _,a=0){super();l(this,"_update");l(this,"objType");this.objType=t,this.position.copy(i),this.rotateY(a),this.load()}async load(){this._update=await de(this.objType),this.update()}update(){this._update&&(this.updateMatrix(),this._update(this.matrix))}}const A={bed:["bed.glb","bed_floor.glb"],bridge:["bridge_center_stone.glb","bridge_center_stoneRound.glb","bridge_center_wood.glb","bridge_center_woodRound.glb","bridge_draw.glb","bridge_side_stone.glb","bridge_side_stoneRound.glb","bridge_side_wood.glb","bridge_side_woodRound.glb","bridge_stone.glb","bridge_stoneNarrow.glb","bridge_stoneRound.glb","bridge_stoneRoundNarrow.glb","bridge_straight.glb","bridge_straight_pillar.glb","bridge_wood.glb","bridge_woodNarrow.glb","bridge_woodRound.glb","bridge_woodRoundNarrow.glb"],cactus:["cactus_short.glb","cactus_tall.glb"],campfire:["campfire_bricks.glb","campfire_logs.glb","campfire_planks.glb","campfire_stones.glb"],canoe:["canoe.glb","canoe_paddle.glb"],cliff:["cliff_blockCave_rock.glb","cliff_blockCave_stone.glb","cliff_blockDiagonal_rock.glb","cliff_blockDiagonal_stone.glb","cliff_blockHalf_rock.glb","cliff_blockHalf_stone.glb","cliff_blockQuarter_rock.glb","cliff_blockQuarter_stone.glb","cliff_blockSlopeHalfWalls_rock.glb","cliff_blockSlopeHalfWalls_stone.glb","cliff_blockSlopeWalls_rock.glb","cliff_blockSlopeWalls_stone.glb","cliff_blockSlope_rock.glb","cliff_blockSlope_stone.glb","cliff_block_rock.glb","cliff_block_stone.glb","cliff_cave_rock.glb","cliff_cave_stone.glb","cliff_cornerInnerLarge_rock.glb","cliff_cornerInnerLarge_stone.glb","cliff_cornerInnerTop_rock.glb","cliff_cornerInnerTop_stone.glb","cliff_cornerInner_rock.glb","cliff_cornerInner_stone.glb","cliff_cornerLarge_rock.glb","cliff_cornerLarge_stone.glb","cliff_cornerTop_rock.glb","cliff_cornerTop_stone.glb","cliff_corner_rock.glb","cliff_corner_stone.glb","cliff_diagonal_rock.glb","cliff_diagonal_stone.glb","cliff_halfCornerInner_rock.glb","cliff_halfCornerInner_stone.glb","cliff_halfCorner_rock.glb","cliff_halfCorner_stone.glb","cliff_half_rock.glb","cliff_half_stone.glb","cliff_large_rock.glb","cliff_large_stone.glb","cliff_rock.glb","cliff_stepsCornerInner_rock.glb","cliff_stepsCornerInner_stone.glb","cliff_stepsCorner_rock.glb","cliff_stepsCorner_stone.glb","cliff_steps_rock.glb","cliff_steps_stone.glb","cliff_stone.glb","cliff_topDiagonal_rock.glb","cliff_topDiagonal_stone.glb","cliff_top_rock.glb","cliff_top_stone.glb","cliff_waterfallTop_rock.glb","cliff_waterfallTop_stone.glb","cliff_waterfall_rock.glb","cliff_waterfall_stone.glb"],crops:["crops_bambooStageA.glb","crops_bambooStageB.glb","crops_cornStageA.glb","crops_cornStageB.glb","crops_cornStageC.glb","crops_cornStageD.glb","crops_dirtDoubleRow.glb","crops_dirtDoubleRowCorner.glb","crops_dirtDoubleRowEnd.glb","crops_dirtRow.glb","crops_dirtRowCorner.glb","crops_dirtRowEnd.glb","crops_dirtSingle.glb","crops_leafsStageA.glb","crops_leafsStageB.glb","crops_wheatStageA.glb","crops_wheatStageB.glb"],crop:["crop_carrot.glb","crop_melon.glb","crop_pumpkin.glb","crop_turnip.glb"],door:["door.glb"],fence:["fence_bend.glb","fence_bendCenter.glb","fence_corner.glb","fence_gate.glb","fence_planks.glb","fence_planksDouble.glb","fence_simple.glb","fence_simpleCenter.glb","fence_simpleDiagonal.glb","fence_simpleDiagonalCenter.glb","fence_simpleHigh.glb","fence_simpleLow.glb"],flag:["flag.glb","flag_banner_long.glb","flag_banner_short.glb","flag_pennant.glb","flag_wide.glb"],flower:["flower_purpleA.glb","flower_purpleB.glb","flower_purpleC.glb","flower_redA.glb","flower_redB.glb","flower_redC.glb","flower_yellowA.glb","flower_yellowB.glb","flower_yellowC.glb"],gate:["gate.glb"],grass:["grass.glb","grass_large.glb","grass_leafs.glb","grass_leafsLarge.glb"],ground:["ground.glb","ground_grass.glb","ground_hills.glb","ground_pathBend.glb","ground_pathBendBank.glb","ground_pathCorner.glb","ground_pathCornerSmall.glb","ground_pathCross.glb","ground_pathEnd.glb","ground_pathEndClosed.glb","ground_pathOpen.glb","ground_pathRocks.glb","ground_pathSide.glb","ground_pathSideOpen.glb","ground_pathSplit.glb","ground_pathStraight.glb","ground_pathTile.glb","ground_riverBend.glb","ground_riverBendBank.glb","ground_riverCorner.glb","ground_riverCornerSmall.glb","ground_riverCross.glb","ground_riverEnd.glb","ground_riverEndClosed.glb","ground_riverOpen.glb","ground_riverRocks.glb","ground_riverSide.glb","ground_riverSideOpen.glb","ground_riverSplit.glb","ground_riverStraight.glb","ground_riverTile.glb"],hanging:["hanging_moss.glb"],lily:["lily_large.glb","lily_small.glb"],log:["log.glb","log_large.glb","log_stack.glb","log_stackLarge.glb"],metal:["metal_gate.glb"],mushroom:["mushroom_red.glb","mushroom_redGroup.glb","mushroom_redTall.glb","mushroom_tan.glb","mushroom_tanGroup.glb","mushroom_tanTall.glb"],path:["path_stone.glb","path_stoneCircle.glb","path_stoneCorner.glb","path_stoneEnd.glb","path_wood.glb","path_woodCorner.glb","path_woodEnd.glb"],plant:["plant_bush.glb","plant_bushDetailed.glb","plant_bushLarge.glb","plant_bushLargeTriangle.glb","plant_bushSmall.glb","plant_bushTriangle.glb","plant_flatShort.glb","plant_flatTall.glb"],platform:["platform_beach.glb","platform_grass.glb","platform_stone.glb"],pot:["pot_large.glb","pot_small.glb"],rocks:["rocks_large.glb","rocks_small.glb"],rock:["rock_largeA.glb","rock_largeB.glb","rock_largeC.glb","rock_largeD.glb","rock_largeE.glb","rock_largeF.glb","rock_smallA.glb","rock_smallB.glb","rock_smallC.glb","rock_smallD.glb","rock_smallE.glb","rock_smallF.glb","rock_smallFlatA.glb","rock_smallFlatB.glb","rock_smallFlatC.glb","rock_smallG.glb","rock_smallH.glb","rock_smallI.glb","rock_smallTopA.glb","rock_smallTopB.glb","rock_tallA.glb","rock_tallB.glb","rock_tallC.glb","rock_tallD.glb","rock_tallE.glb","rock_tallF.glb","rock_tallG.glb","rock_tallH.glb","rock_tallI.glb","rock_tallJ.glb"],siege:["siege_ballista.glb","siege_ballista_demolished.glb","siege_catapult.glb","siege_catapult_demolished.glb","siege_ram.glb","siege_ram_demolished.glb","siege_tower.glb","siege_tower_demolished.glb","siege_trebuchet.glb","siege_trebuchet_demolished.glb"],sign:["sign.glb"],stairs:["stairs_stone.glb","stairs_stone_square.glb"],statue:["statue_block.glb","statue_column.glb","statue_columnDamaged.glb","statue_head.glb","statue_obelisk.glb","statue_ring.glb"],stone:["stone_largeA.glb","stone_largeB.glb","stone_largeC.glb","stone_largeD.glb","stone_largeE.glb","stone_largeF.glb","stone_smallA.glb","stone_smallB.glb","stone_smallC.glb","stone_smallD.glb","stone_smallE.glb","stone_smallF.glb","stone_smallFlatA.glb","stone_smallFlatB.glb","stone_smallFlatC.glb","stone_smallG.glb","stone_smallH.glb","stone_smallI.glb","stone_smallTopA.glb","stone_smallTopB.glb","stone_tallA.glb","stone_tallB.glb","stone_tallC.glb","stone_tallD.glb","stone_tallE.glb","stone_tallF.glb","stone_tallG.glb","stone_tallH.glb","stone_tallI.glb","stone_tallJ.glb"],stump:["stump_old.glb","stump_oldTall.glb","stump_round.glb","stump_roundDetailed.glb","stump_square.glb","stump_squareDetailed.glb","stump_squareDetailedWide.glb"],tent:["tent_detailedClosed.glb","tent_detailedOpen.glb","tent_smallClosed.glb","tent_smallOpen.glb"],tower:["tower_base.glb","tower_hexagon_base.glb","tower_hexagon_mid.glb","tower_hexagon_roof.glb","tower_hexagon_roof_secondary.glb","tower_hexagon_top.glb","tower_hexagon_top_wood.glb","tower_slant_roof.glb","tower_square.glb","tower_square_arch.glb","tower_square_base.glb","tower_square_base_border.glb","tower_square_base_color.glb","tower_square_mid.glb","tower_square_mid_color.glb","tower_square_mid_door.glb","tower_square_mid_open.glb","tower_square_mid_open_simple.glb","tower_square_mid_windows.glb","tower_square_roof.glb","tower_square_top.glb","tower_square_top_color.glb","tower_square_top_roof.glb","tower_square_top_roof_high.glb","tower_square_top_roof_high_windows.glb","tower_square_top_roof_rounded.glb","tower_top.glb"],tree:["tree_blocks.glb","tree_blocks_dark.glb","tree_blocks_fall.glb","tree_cone.glb","tree_cone_dark.glb","tree_cone_fall.glb","tree_default.glb","tree_default_dark.glb","tree_default_fall.glb","tree_detailed.glb","tree_detailed_dark.glb","tree_detailed_fall.glb","tree_fat.glb","tree_fat_darkh.glb","tree_fat_fall.glb","tree_large.glb","tree_log.glb","tree_oak.glb","tree_oak_dark.glb","tree_oak_fall.glb","tree_palm.glb","tree_palmBend.glb","tree_palmDetailedShort.glb","tree_palmDetailedTall.glb","tree_palmShort.glb","tree_palmTall.glb","tree_pineDefaultA.glb","tree_pineDefaultB.glb","tree_pineGroundA.glb","tree_pineGroundB.glb","tree_pineRoundA.glb","tree_pineRoundB.glb","tree_pineRoundC.glb","tree_pineRoundD.glb","tree_pineRoundE.glb","tree_pineRoundF.glb","tree_pineSmallA.glb","tree_pineSmallB.glb","tree_pineSmallC.glb","tree_pineSmallD.glb","tree_pineTallA.glb","tree_pineTallA_detailed.glb","tree_pineTallB.glb","tree_pineTallB_detailed.glb","tree_pineTallC.glb","tree_pineTallC_detailed.glb","tree_pineTallD.glb","tree_pineTallD_detailed.glb","tree_plateau.glb","tree_plateau_dark.glb","tree_plateau_fall.glb","tree_simple.glb","tree_simple_dark.glb","tree_simple_fall.glb","tree_small (2).glb","tree_small.glb","tree_trunk.glb"],wall:["wall.glb","wall_corner.glb","wall_corner_half.glb","wall_corner_half_tower.glb","wall_corner_slant.glb","wall_doorway.glb","wall_half.glb","wall_half_modular.glb","wall_narrow.glb","wall_narrow_corner.glb","wall_narrow_gate.glb","wall_narrow_stairs.glb","wall_narrow_stairs_rail.glb","wall_narrow_wood.glb","wall_narrow_wood_fence.glb","wall_pillar.glb","wall_stud.glb","wall_to_narrow.glb"],Water:["Water_1_M_Normal.jpg","Water_2_M_Normal.jpg"]};class at extends it{generate(){for(let e=0;e<this.width;e++)for(let t=0;t<this.height;t++)this.tiles[t*this.width+e]=new st(new _(e-this.width/2,0,t-this.height/2));for(let e=0;e<this.width*this.height/3;e++){let t=(this.r()-.5)*this.width,i=(this.r()-.5)*this.height;this.objects.push(new te(A.grass[Math.floor(this.r()*A.grass.length)],new _(t,0,i),this.r()*Math.PI*2))}for(let e=0;e<this.width*this.height/10;e++){let t=(this.r()-.5)*this.width,i=(this.r()-.5)*this.height;this.objects.push(new te(A.tree[Math.floor(this.r()*A.tree.length)],new _(t,0,i),this.r()*Math.PI*2))}}}class rt extends I{constructor(){super();l(this,"r");l(this,"tiles");l(this,"objects");l(this,"world");l(this,"water");l(this,"water2");l(this,"_wq",!1);l(this,"grid");const t=this.r=$e(273);this.tiles=[],this.objects=[],(this.world=new at(this,100,100,this.tiles,this.objects,t)).generate(),this.makeWater(),he("ground_riverOpen.glb",!0).then(n=>{this.water2=n.scene.children[0].clone(),this.water2.scale.set(1e3,1,1e3),this.water2.position.y=-.05,this.add(this.water2),X(this.water2.material),this.water2.receiveShadow=!0});const i=Math.max(100,100),a=new Le(i,i),s=i%2==0?.5:0;a.position.set(s,0,s),this.add(this.grid=a)}set fancyWater(t){this._wq=t,this.water.visible=t}get fancyWater(){return this._wq}async makeWater(){this.water=new Me(new oe(1e3,1e3),{scale:20,textureWidth:1024,textureHeight:1024,color:"#B0F5FF",flowDirection:new le(1,1),normalMap0:await K("Water_1_M_Normal.jpg").then(t=>(t.wrapS=t.wrapT=Y,t)),normalMap1:await K("Water_2_M_Normal.jpg").then(t=>(t.wrapS=t.wrapT=Y,t)),flowSpeed:.01}),this.water.position.y=-.04,this.water.rotation.x=-Math.PI/2,this.water.visible=!1,this.add(this.water)}}const ot=j.lights_pars_begin,ie={lights_fragment_begin:r=>`
GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0) && defined( RE_Direct ) && defined( USE_CSM ) && defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	float linearDepth = (vViewPosition.z) / (shadowFar - cameraNear);
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#if defined( USE_SHADOWMAP ) && defined( CSM_FADE ) && CSM_FADE == 1
	vec2 cascade;
	float cascadeCenter;
	float closestEdge;
	float margin;
	float csmx;
	float csmy;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );

	  	#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
			// NOTE: Depth gets larger away from the camera.
			// cascade.x is closer, cascade.y is further

				#if ( UNROLLED_LOOP_INDEX < ${r} )

					// NOTE: Apply CSM shadows

					cascade = CSM_cascades[ i ];
					cascadeCenter = ( cascade.x + cascade.y ) / 2.0;
					closestEdge = linearDepth < cascadeCenter ? cascade.x : cascade.y;
					margin = 0.25 * pow( closestEdge, 2.0 );
					csmx = cascade.x - margin / 2.0;
					csmy = cascade.y + margin / 2.0;
					if( linearDepth >= csmx && ( linearDepth < csmy || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 ) ) {

						float dist = min( linearDepth - csmx, csmy - linearDepth );
						float ratio = clamp( dist / margin, 0.0, 1.0 );

						vec3 prevColor = directLight.color;
						directionalLightShadow = directionalLightShadows[ i ];
						directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

						bool shouldFadeLastCascade = UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth > cascadeCenter;
						directLight.color = mix( prevColor, directLight.color, shouldFadeLastCascade ? ratio : 1.0 );

						ReflectedLight prevLight = reflectedLight;
						RE_Direct( directLight, geometry, material, reflectedLight );

						bool shouldBlend = UNROLLED_LOOP_INDEX != CSM_CASCADES - 1 || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1 && linearDepth < cascadeCenter;
						float blendRatio = shouldBlend ? ratio : 1.0;

						reflectedLight.directDiffuse = mix( prevLight.directDiffuse, reflectedLight.directDiffuse, blendRatio );
						reflectedLight.directSpecular = mix( prevLight.directSpecular, reflectedLight.directSpecular, blendRatio );
						reflectedLight.indirectDiffuse = mix( prevLight.indirectDiffuse, reflectedLight.indirectDiffuse, blendRatio );
						reflectedLight.indirectSpecular = mix( prevLight.indirectSpecular, reflectedLight.indirectSpecular, blendRatio );

					}

				#else

					// NOTE: Apply the reminder of directional lights

					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					RE_Direct( directLight, geometry, material, reflectedLight );

				#endif

	  	#endif

	}
	#pragma unroll_loop_end
	#else

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];
			getDirectionalLightInfo( directionalLight, geometry, directLight );

			#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS ) 

				#if ( UNROLLED_LOOP_INDEX < ${r} )

					// NOTE: Apply CSM shadows

					directionalLightShadow = directionalLightShadows[ i ];
					if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y) directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

					if(linearDepth >= CSM_cascades[UNROLLED_LOOP_INDEX].x && (linearDepth < CSM_cascades[UNROLLED_LOOP_INDEX].y || UNROLLED_LOOP_INDEX == CSM_CASCADES - 1)) RE_Direct( directLight, geometry, material, reflectedLight );

				#else

					// NOTE: Apply the reminder of directional lights

					directionalLightShadow = directionalLightShadows[ i ];
					directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	
					RE_Direct( directLight, geometry, material, reflectedLight );

				#endif

			#endif

		}
		#pragma unroll_loop_end

	#endif

	#if ( NUM_DIR_LIGHTS > NUM_DIR_LIGHT_SHADOWS)
		// compute the lights not casting shadows (if any)

		#pragma unroll_loop_start
		for ( int i = NUM_DIR_LIGHT_SHADOWS; i < NUM_DIR_LIGHTS; i ++ ) {

			directionalLight = directionalLights[ i ];

			getDirectionalLightInfo( directionalLight, geometry, directLight );

			RE_Direct( directLight, geometry, material, reflectedLight );

		}
		#pragma unroll_loop_end

	#endif

#endif


#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_CSM ) && !defined( CSM_CASCADES )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,lights_pars_begin:r=>`
#if defined( USE_CSM ) && defined( CSM_CASCADES )
uniform vec2 CSM_cascades[${r}]; // This value is the max. number supported of cascades
uniform float cameraNear;
uniform float shadowFar;
#endif
	`+ot};class lt extends Z{constructor(e){super(),this.displayFrustum=!0,this.displayPlanes=!0,this.displayShadowBounds=!0,this.cascadeLines=[],this.cascadePlanes=[],this.shadowLines=[],this.csm=e;const t=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),a=new Ce;a.setIndex(new $(t,1)),a.setAttribute("position",new $(i,3,!1));const s=new De(a,new ve);this.add(s),this.frustumLines=s}updateVisibility(){const e=this.displayFrustum,t=this.displayPlanes,i=this.displayShadowBounds,a=this.frustumLines,s=this.cascadeLines,n=this.cascadePlanes,c=this.shadowLines;for(let o=0,g=s.length;o<g;o++){const h=s[o],f=n[o],d=c[o];h.visible=e,f.visible=e&&t,d.visible=i}a.visible=e}update(){const e=this.csm,t=e.camera,i=e.cascades,a=e.mainFrustum,s=e.frustums,n=e.lights,o=this.frustumLines.geometry.getAttribute("position"),g=this.cascadeLines,h=this.cascadePlanes,f=this.shadowLines;for(this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.updateMatrixWorld(!0);g.length>i;)this.remove(g.pop()),this.remove(h.pop()),this.remove(f.pop());for(;g.length<i;){const u=new J(new G,new E(16777215)),M=new ye({transparent:!0,opacity:.1,depthWrite:!1,side:ke}),C=new Ee(new oe,M),b=new Z,w=new J(new G,new E(16776960));b.add(w),this.add(u),this.add(C),this.add(b),g.push(u),h.push(C),f.push(b)}for(let u=0;u<i;u++){const M=s[u],b=n[u].shadow.camera,w=M.vertices.far,O=g[u],x=h[u],D=f[u],V=D.children[0];O.box.min.copy(w[2]),O.box.max.copy(w[0]),O.box.max.z+=1e-4,x.position.addVectors(w[0],w[2]),x.position.multiplyScalar(.5),x.scale.subVectors(w[0],w[2]),x.scale.z=1e-4,this.remove(D),D.position.copy(b.position),D.quaternion.copy(b.quaternion),D.scale.copy(b.scale),D.updateMatrixWorld(!0),this.attach(D),V.box.min.set(b.bottom,b.left,-b.far),V.box.max.set(b.top,b.right,-b.near)}const d=a.vertices.near,p=a.vertices.far;o.setXYZ(0,p[0].x,p[0].y,p[0].z),o.setXYZ(1,p[3].x,p[3].y,p[3].z),o.setXYZ(2,p[2].x,p[2].y,p[2].z),o.setXYZ(3,p[1].x,p[1].y,p[1].z),o.setXYZ(4,d[0].x,d[0].y,d[0].z),o.setXYZ(5,d[3].x,d[3].y,d[3].z),o.setXYZ(6,d[2].x,d[2].y,d[2].z),o.setXYZ(7,d[1].x,d[1].y,d[1].z),o.needsUpdate=!0}}const B=new y;class R{constructor(e={}){this.vertices={near:[new _,new _,new _,new _],far:[new _,new _,new _,new _]},e.projectionMatrix!==void 0&&this.setFromProjectionMatrix(e.projectionMatrix,e.maxFar||1e4)}setFromProjectionMatrix(e,t){const i=e.elements[11]===0;return B.copy(e).invert(),this.vertices.near[0].set(1,1,-1),this.vertices.near[1].set(1,-1,-1),this.vertices.near[2].set(-1,-1,-1),this.vertices.near[3].set(-1,1,-1),this.vertices.near.forEach(function(a){a.applyMatrix4(B)}),this.vertices.far[0].set(1,1,1),this.vertices.far[1].set(1,-1,1),this.vertices.far[2].set(-1,-1,1),this.vertices.far[3].set(-1,1,1),this.vertices.far.forEach(function(a){a.applyMatrix4(B);const s=Math.abs(a.z);i?a.z*=Math.min(t/s,1):a.multiplyScalar(Math.min(t/s,1))}),this.vertices}split(e,t){for(;e.length>t.length;)t.push(new R);t.length=e.length;for(let i=0;i<e.length;i++){const a=t[i];if(i===0)for(let s=0;s<4;s++)a.vertices.near[s].copy(this.vertices.near[s]);else for(let s=0;s<4;s++)a.vertices.near[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;s++)a.vertices.far[s].copy(this.vertices.far[s]);else for(let s=0;s<4;s++)a.vertices.far[s].lerpVectors(this.vertices.near[s],this.vertices.far[s],e[i])}}toSpace(e,t){for(let i=0;i<4;i++)t.vertices.near[i].copy(this.vertices.near[i]).applyMatrix4(e),t.vertices.far[i].copy(this.vertices.far[i]).applyMatrix4(e)}}function ge(r,e,t,i){for(let a=1;a<r;a++)i.push((e+(t-e)*a/r)/t);i.push(1)}function _e(r,e,t,i){for(let a=1;a<r;a++)i.push(e*Math.pow(t/e,a/r)/t);i.push(1)}function nt(r,e,t,i,a){U.length=0,z.length=0,_e(r,e,t,z),ge(r,e,t,U);for(let s=1;s<r;s++)a.push(W.lerp(U[s-1],z[s-1],i));a.push(1)}const ct=new _(0,0,0),F=new y,se=new y,ae=new y,re=new y,H=new R,m=new _,k=new G,U=[],z=[];class pe{constructor(e){var t,i,a,s,n,c,o,g,h,f,d,p,u,M,C;this.mainFrustum=new R,this.frustums=[],this.breaks=[],this.lights=[],this.shaders=new Map,this.camera=e.camera,this.parent=e.parent,this.cascades=(t=e.cascades)!==null&&t!==void 0?t:3,this.maxCascades=(i=e.maxCascades)!==null&&i!==void 0?i:e.cascades,this.maxFar=(a=e.maxFar)!==null&&a!==void 0?a:1e5,this.mode=(s=e.mode)!==null&&s!==void 0?s:"practical",this.practicalModeLambda=(n=e.practicalModeLambda)!==null&&n!==void 0?n:.5,this.shadowMapSize=(c=e.shadowMapSize)!==null&&c!==void 0?c:2048,this.shadowBias=(o=e.shadowBias)!==null&&o!==void 0?o:0,this.shadowNormalBias=(g=e.shadowNormalBias)!==null&&g!==void 0?g:0,this.lightDirection=(h=e.lightDirection)!==null&&h!==void 0?h:new _(1,-1,1).normalize(),this.lightDirectionUp=(f=e.lightDirectionUp)!==null&&f!==void 0?f:I.DEFAULT_UP,this.lightIntensity=(d=e.lightIntensity)!==null&&d!==void 0?d:1,this.lightColor=(p=e.lightColor)!==null&&p!==void 0?p:new E(16777215),this.lightMargin=(u=e.lightMargin)!==null&&u!==void 0?u:200,this.fade=(M=e.fade)!==null&&M!==void 0?M:!1,this.noLastCascadeCutOff=(C=e.noLastCascadeCutOff)!==null&&C!==void 0?C:!1,this.customSplitsCallback=e.customSplitsCallback,this.createLights(),this.updateFrustums(),this.injectInclude()}createLights(){for(let e=0;e<this.cascades;e++){const t=new ne(this.lightColor,this.lightIntensity);t.castShadow=!0,t.shadow.mapSize.width=this.shadowMapSize,t.shadow.mapSize.height=this.shadowMapSize,t.shadow.camera.near=0,t.shadow.camera.far=1,this.parent.add(t.target),this.lights.push(t)}for(let e=this.lights.length-1;e>=0;e--){const t=this.lights[e];t.parent=this.parent,this.parent.children.unshift(t)}}initCascades(){this.mainFrustum.setFromProjectionMatrix(this.camera.projectionMatrix,this.maxFar),this.mainFrustum.split(this.breaks,this.frustums)}updateShadowBounds(){const e=this.frustums;for(let t=0;t<e.length;t++){const i=this.lights[t],a=i.shadow.camera,s=this.frustums[t],n=s.vertices.near,c=s.vertices.far,o=c[0];let g;o.distanceTo(c[2])>o.distanceTo(n[2])?g=c[2]:g=n[2];let h=o.distanceTo(g);if(this.fade){const f=this.camera,d=Math.max(f.far,this.maxFar),p=s.vertices.far[0].z/(d-f.near),u=.25*Math.pow(p,2)*(d-f.near);h+=u}a.left=-h/2,a.right=h/2,a.top=h/2,a.bottom=-h/2,a.near=0,a.far=h+this.lightMargin,a.updateProjectionMatrix(),i.shadow.bias=this.shadowBias*h,i.shadow.normalBias=this.shadowNormalBias*h}}updateBreaks(){const e=this.camera,t=Math.min(e.far,this.maxFar);switch(this.breaks.length=0,this.mode){case"uniform":ge(this.cascades,e.near,t,this.breaks);break;case"logarithmic":_e(this.cascades,e.near,t,this.breaks);break;case"practical":nt(this.cascades,e.near,t,this.practicalModeLambda,this.breaks);break;case"custom":if(this.customSplitsCallback===void 0)throw new Error("CSM: Custom split scheme callback not defined.");this.breaks.push(...this.customSplitsCallback(this.cascades,e.near,t));break}}update(){for(let e=0;e<this.frustums.length;e++){const t=this.lights[e],i=t.shadow.camera,a=(i.right-i.left)/this.shadowMapSize,s=(i.top-i.bottom)/this.shadowMapSize;F.lookAt(ct,this.lightDirection,this.lightDirectionUp),se.copy(F).invert(),ae.copy(this.parent.matrixWorld).invert().multiply(this.camera.matrixWorld),re.multiplyMatrices(se,ae),this.frustums[e].toSpace(re,H);const n=H.vertices.near,c=H.vertices.far;k.makeEmpty();for(let o=0;o<4;o++)k.expandByPoint(n[o]),k.expandByPoint(c[o]);k.getCenter(m),m.z=k.max.z+this.lightMargin,m.x=Math.floor(m.x/a)*a,m.y=Math.floor(m.y/s)*s,m.applyMatrix4(F),t.position.copy(m),t.target.position.copy(m),t.target.position.x+=this.lightDirection.x,t.target.position.y+=this.lightDirection.y,t.target.position.z+=this.lightDirection.z}}injectInclude(){j.lights_fragment_begin=ie.lights_fragment_begin(this.cascades),j.lights_pars_begin=ie.lights_pars_begin(this.maxCascades)}setupMaterial(e){const t=i=>{const a=this.getExtendedBreaks(),s=Math.min(this.camera.far,this.maxFar);i.uniforms.CSM_cascades={value:a},i.uniforms.cameraNear={value:Math.min(this.maxFar,this.camera.near)},i.uniforms.shadowFar={value:s},e.defines=e.defines||{},e.defines.USE_CSM=1,e.defines.CSM_CASCADES=this.cascades,e.defines.CSM_FADE=this.fade?"1":"0",e.needsUpdate=!0,this.shaders.set(e,i),e.addEventListener("dispose",()=>{this.shaders.delete(e)})};if(!e.onBeforeCompile)e.onBeforeCompile=t;else{const i=e.onBeforeCompile;e.onBeforeCompile=(...a)=>{i(...a),t(a[0])}}}updateUniforms(){const e=Math.min(this.camera.far,this.maxFar),t=this.getExtendedBreaks();this.shaders.forEach((i,a)=>{if(i!==null){const c=i.uniforms;c.CSM_cascades.value=t,c.cameraNear.value=Math.min(this.maxFar,this.camera.near),c.shadowFar.value=e}let s=!1;const n=this.fade?"0":"1";a.defines.CSM_FADE!==n&&(a.defines.CSM_FADE=n,s=!0),a.defines.CSM_CASCADES!==this.cascades&&(a.defines.CSM_CASCADES=this.cascades,s=!0),s&&(a.needsUpdate=!0)})}getExtendedBreaks(){const e=[];for(let t=0;t<this.maxCascades;t++){const i=this.breaks[t]||0,a=this.breaks[t-1]||0;e.push(new le(a,i))}return this.noLastCascadeCutOff&&(e[this.breaks.length-1].y=1/0),e}updateFrustums(){this.updateBreaks(),this.initCascades(),this.updateShadowBounds(),this.updateUniforms()}updateCascades(e){this.cascades=e;for(const t of this.lights)this.parent.remove(t),t.dispose();this.lights.length=0,this.createLights(),this.injectInclude(),this.updateFrustums()}updateShadowMapSize(e){this.shadowMapSize=e;for(let t=0;t<this.lights.length;t++){const i=this.lights[t];i.shadow.mapSize.width=e,i.shadow.mapSize.height=e,i.shadow.map&&(i.shadow.map.dispose(),i.shadow.map=null)}}dispose(){this.shaders.forEach(function(e,t){delete t.onBeforeCompile,delete t.defines.USE_CSM,delete t.defines.CSM_CASCADES,delete t.defines.CSM_FADE,e!==null&&(delete e.uniforms.CSM_cascades,delete e.uniforms.cameraNear,delete e.uniforms.shadowFar),t.needsUpdate=!0}),this.shaders.clear();for(let e=0;e<this.lights.length;e++)this.lights[e].dispose(),this.parent.remove(this.lights[e])}}pe.Helper=lt;function ht(r,e,t){const i=Math.PI/180,a=180/Math.PI,s=23.45*Math.sin(360*(284+t)/365*i),n=e*i,g=15*(r*24-12),h=Math.asin(Math.sin(n)*Math.sin(s*i)+Math.cos(n)*Math.cos(s*i)*Math.cos(g*i))*a,f=Math.acos((Math.sin(s*i)-Math.sin(h*i)*Math.sin(n))/(Math.cos(h*i)*Math.cos(n)))*a;return{azimuth:g>=0?360-f:f,elevation:h}}class dt{constructor(){l(this,"parent");l(this,"scene");l(this,"resize_observer");l(this,"renderer");l(this,"envRenderer");l(this,"envScene");l(this,"clock");l(this,"camera");l(this,"controls");l(this,"renderJob",0);l(this,"sunDirection",new _);l(this,"sun");l(this,"csm");l(this,"stats");l(this,"gui");l(this,"guiStatsEl");l(this,"_time",0);l(this,"_useCSM",!1);l(this,"timeFlows",!1);l(this,"updateShadows",!0);l(this,"sky");l(this,"hemilight");this.scene=new Q,this.envScene=new Q,this.resize_observer=new ResizeObserver(this.on_resize.bind(this)),this.renderer=new xe({antialias:!0}),this.envRenderer=new Ae(this.renderer),this.clock=new Ie(!0),et(this.scene),this.intiCamera(),this.initRenderer(),this.initScene(),this.initSun(),this.initDomHelpers(),this.time=.3}intiCamera(){this.camera=new Re(60,1,.1,100);const e=this.controls=new Oe(this.camera,this.renderer.domElement);e.enableDamping=!0,e.dampingFactor=.05,e.screenSpacePanning=!1,e.minDistance=1,e.maxDistance=10,e.maxPolarAngle=Math.PI/2,this.resetCamera()}initRenderer(){this.scene.background=new E(8900331),this.envScene.background=new E(8900331),this.scene.fog=new Pe(8900331,.02),this.renderer.toneMapping=Te,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ne,this.renderer.toneMappingExposure=.5}initScene(){this.scene.add(this.camera),this.scene.add(this.hemilight=new Be(8900331,7597533,.1)),this.sky=new Fe,this.sky.scale.setScalar(45e4),this.scene.add(this.sky);const e=this.sky.material.uniforms;e.turbidity.value=10,e.rayleigh.value=3,e.mieCoefficient.value=5e-4,e.mieDirectionalG.value=.7}initDomHelpers(){var a;this.stats=new He,this.stats.dom.style.top="unset",this.stats.dom.style.bottom="0",this.gui=new Ue({autoPlace:!1}),this.gui.domElement.id="game-dat-gui";const e=this.gui.addFolder("Performance");e.add({wireframe:!1},"wireframe").onChange(s=>{this.scene.traverse(n=>{n.type==="Mesh"&&(n.material.wireframe=s)})});let t=document.createElement("li");this.guiStatsEl=document.createElement("div"),this.guiStatsEl.classList.add("gui-stats"),t.appendChild(this.guiStatsEl),(a=e.domElement.querySelector("ul"))==null||a.appendChild(t),e.open();const i=this.gui.addFolder("Shadow");i.add(this,"useCSM"),i.add(this,"updateShadows"),i.add(this.sun.shadow,"bias",-5e-4,5e-4),i.add(this.sun.shadow,"normalBias",-.02,.02),i.add({shadowMapSize:11},"shadowMapSize",6,13,1).onChange(s=>{this.csm?2**s!==this.csm.shadowMapSize&&this.csm.updateShadowMapSize(2**s):(this.sun.shadow.mapSize.width=2**s,this.sun.shadow.mapSize.height=2**s)}),i.open()}on_resize(){this.parent&&(this.renderer.setSize(this.parent.clientWidth,this.parent.clientHeight),this.camera.aspect=this.parent.clientWidth/this.parent.clientHeight,this.camera.updateProjectionMatrix())}render(){this.renderJob=requestAnimationFrame(()=>this.render());const e=this.clock.getDelta();this.csm&&this.updateShadows&&this.csm.update(),this.renderer.render(this.scene,this.camera),this.controls.update(e),this.updateStats(),this.timeFlows&&(this.time+=e*.01),this.sun.visible&&this.sunFollowPlayer()}attach(e){var t;this.parent&&(this.parent.removeChild(this.gui.domElement),this.parent.removeChild(this.stats.dom),this.parent.removeChild(this.renderer.domElement),this.resize_observer.unobserve(this.parent),cancelAnimationFrame(this.renderJob)),this.parent=e,e&&(e.appendChild(this.gui.domElement),e.appendChild(this.stats.dom),e.appendChild(this.renderer.domElement),this.resize_observer.observe(e),this.renderer.setPixelRatio(((t=e.ownerDocument.defaultView)==null?void 0:t.devicePixelRatio)??1),this.renderJob=requestAnimationFrame(()=>this.render()))}updateStats(){this.stats.update();const e=this.renderer.info;this.guiStatsEl.textContent=[`${e.memory.geometries}▦`,`${e.memory.textures}▨`,`${e.render.calls}c`,`${e.render.triangles}△`,`${e.render.lines}l`,`${e.render.points}p`].join(" ")}resetCamera(){this.camera.position.set(-5,2,-5),this.camera.lookAt(new _(0,0,0))}set time(e){this._time=e%1;let t=ht(this._time,40,100);const i=W.degToRad(90-t.elevation),a=W.degToRad(t.azimuth);let s=new _;s.setFromSphericalCoords(1,i,a),this.csm&&this.csm.lightDirection.copy(s.clone().multiplyScalar(-1)),this.sun.visible=i<Math.PI/2,this.sunDirection.copy(s.clone()),this.sunFollowPlayer(),this.sky.material.uniforms.sunPosition.value.copy(s),this.envScene.add(this.sky);const c=this.envRenderer.fromScene(this.envScene).texture;c.mipmaps=[],c.generateMipmaps=!0,c.needsUpdate=!0,this.scene.environment=c,this.scene.environmentIntensity=.2,this.scene.add(this.sky)}get time(){return this._time}set useCSM(e){this._useCSM=e,e?(this.initCSM(),this.sun.visible=!1,this.renderer.toneMappingExposure=.5):(this.csm&&this.csm.dispose(),this.csm=void 0,this.sun.visible=!0,this.renderer.toneMappingExposure=.5)}get useCSM(){return this._useCSM}initCSM(){this.csm&&this.csm.dispose(),this.csm=new pe({maxFar:this.camera.far,shadowNormalBias:.015,cascades:4,shadowMapSize:4096,lightIntensity:1,lightDirection:this.sunDirection.clone().multiplyScalar(-1),camera:this.camera,fade:!0,parent:this.scene}),Ke(this.csm)}initSun(){this.sun=new ne(16777215,1),this.sun.castShadow=!0,this.sun.position.set(200,200,0),this.sun.shadow.mapSize.width=2048,this.sun.shadow.mapSize.height=2048,this.sun.shadow.radius=1,this.sun.shadow.normalBias=.015;let e=this.sun.shadow.camera;e.near=1,e.far=300,this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(new ze(this.sun))}sunFollowPlayer(){const e=this.controls.target;this.sun.target.position.set(e.x,e.y,e.z),this.sun.position.copy(e.clone().add(this.sunDirection.clone().multiplyScalar(200)));const t=this.sun.shadow.camera;t.left=t.bottom=-(t.top=t.right=Math.max(this.controls.getDistance()*2,5)),t.updateProjectionMatrix()}}class gt extends dt{constructor(){super();l(this,"ground");this.scene.add(this.ground=new rt),this.extraDomHelpers()}extraDomHelpers(){const i=this.gui.addFolder("World");i.add(this.sky,"visible").name("fancySky"),i.add(this.ground,"fancyWater"),i.add(this.ground.grid,"visible").name("gridVisible"),i.add(this,"time",0,1),i.add(this,"timeFlows"),i.open()}}const _t=Ge({__name:"CivilisationGame",setup(r){let e;const t=We(void 0);return je(t,i=>{e??(e=new gt),e.attach(i)}),qe(()=>{}),(i,a)=>(Xe(),Ve("div",{id:"civilisation-game-parent",ref_key:"game_container",ref:t},null,512))}}),mt=Ye(_t,[["__scopeId","data-v-d2ad4731"]]);export{mt as default};
