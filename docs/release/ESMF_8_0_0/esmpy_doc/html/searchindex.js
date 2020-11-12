Search.setIndex({docnames:["CoordSys","FileFormat","GridItem","LineType","LogKind","MeshElemType","MeshLoc","NormType","PoleMethod","Region","RegridMethod","StaggerLoc","TypeKind","UnmappedAction","api","appendix","examples","field","grid","index","install","intro","locstream","manager","mesh","regrid","regridfromfile"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["CoordSys.rst","FileFormat.rst","GridItem.rst","LineType.rst","LogKind.rst","MeshElemType.rst","MeshLoc.rst","NormType.rst","PoleMethod.rst","Region.rst","RegridMethod.rst","StaggerLoc.rst","TypeKind.rst","UnmappedAction.rst","api.rst","appendix.rst","examples.rst","field.rst","grid.rst","index.rst","install.rst","intro.rst","locstream.rst","manager.rst","mesh.rst","regrid.rst","regridfromfile.rst"],objects:{"":{ESMF:[21,0,0,"-"]},"ESMF.api.constants":{CoordSys:[0,1,1,""],FileFormat:[1,1,1,""],GridItem:[2,1,1,""],LineType:[3,1,1,""],LogKind:[4,1,1,""],MeshElemType:[5,1,1,""],MeshLoc:[6,1,1,""],NormType:[7,1,1,""],PoleMethod:[8,1,1,""],Region:[9,1,1,""],RegridMethod:[10,1,1,""],StaggerLoc:[11,1,1,""],TypeKind:[12,1,1,""],UnmappedAction:[13,1,1,""]},"ESMF.api.constants.CoordSys":{CART:[0,2,1,""],SPH_DEG:[0,2,1,""],SPH_RAD:[0,2,1,""]},"ESMF.api.constants.FileFormat":{ESMFGRID:[1,2,1,""],ESMFMESH:[1,2,1,""],GRIDSPEC:[1,2,1,""],SCRIP:[1,2,1,""],UGRID:[1,2,1,""],VTK:[1,2,1,""]},"ESMF.api.constants.GridItem":{AREA:[2,2,1,""],MASK:[2,2,1,""]},"ESMF.api.constants.LineType":{CART:[3,2,1,""],GREAT_CIRCLE:[3,2,1,""]},"ESMF.api.constants.LogKind":{MULTI:[4,2,1,""],NONE:[4,2,1,""]},"ESMF.api.constants.MeshElemType":{HEX:[5,2,1,""],QUAD:[5,2,1,""],TETRA:[5,2,1,""],TRI:[5,2,1,""]},"ESMF.api.constants.MeshLoc":{ELEMENT:[6,2,1,""],NODE:[6,2,1,""]},"ESMF.api.constants.NormType":{DSTAREA:[7,2,1,""],FRACAREA:[7,2,1,""]},"ESMF.api.constants.PoleMethod":{ALLAVG:[8,2,1,""],NONE:[8,2,1,""],NPNTAVG:[8,2,1,""],TEETH:[8,2,1,""]},"ESMF.api.constants.Region":{EMPTY:[9,2,1,""],SELECT:[9,2,1,""],TOTAL:[9,2,1,""]},"ESMF.api.constants.RegridMethod":{BILINEAR:[10,2,1,""],CONSERVE:[10,2,1,""],CONSERVE_2ND:[10,2,1,""],NEAREST_DTOS:[10,2,1,""],NEAREST_STOD:[10,2,1,""],PATCH:[10,2,1,""]},"ESMF.api.constants.StaggerLoc":{CENTER:[11,2,1,""],CENTER_VCENTER:[11,2,1,""],CENTER_VFACE:[11,2,1,""],CORNER:[11,2,1,""],CORNER_VCENTER:[11,2,1,""],CORNER_VFACE:[11,2,1,""],EDGE1:[11,2,1,""],EDGE1_VCENTER:[11,2,1,""],EDGE1_VFACE:[11,2,1,""],EDGE2:[11,2,1,""],EDGE2_VCENTER:[11,2,1,""],EDGE2_VFACE:[11,2,1,""]},"ESMF.api.constants.TypeKind":{I4:[12,2,1,""],I8:[12,2,1,""],R4:[12,2,1,""],R8:[12,2,1,""]},"ESMF.api.constants.UnmappedAction":{ERROR:[13,2,1,""],IGNORE:[13,2,1,""]},"ESMF.api.esmpymanager":{Manager:[23,1,1,""]},"ESMF.api.field":{Field:[17,1,1,""]},"ESMF.api.field.Field":{copy:[17,3,1,""],data:[17,3,1,""],destroy:[17,3,1,""],get_area:[17,3,1,""],grid:[17,3,1,""],lower_bounds:[17,3,1,""],name:[17,3,1,""],ndbounds:[17,3,1,""],rank:[17,3,1,""],read:[17,3,1,""],staggerloc:[17,3,1,""],type:[17,3,1,""],upper_bounds:[17,3,1,""],xd:[17,3,1,""]},"ESMF.api.grid":{Grid:[18,1,1,""]},"ESMF.api.grid.Grid":{add_coords:[18,3,1,""],add_item:[18,3,1,""],area:[18,3,1,""],areatype:[18,3,1,""],coord_sys:[18,3,1,""],coords:[18,3,1,""],copy:[18,3,1,""],destroy:[18,3,1,""],get_coords:[18,3,1,""],get_item:[18,3,1,""],has_corners:[18,3,1,""],lower_bounds:[18,3,1,""],mask:[18,3,1,""],max_index:[18,3,1,""],num_peri_dims:[18,3,1,""],periodic_dim:[18,3,1,""],pole_dim:[18,3,1,""],rank:[18,3,1,""],size:[18,3,1,""],staggerloc:[18,3,1,""],type:[18,3,1,""],upper_bounds:[18,3,1,""]},"ESMF.api.locstream":{LocStream:[22,1,1,""]},"ESMF.api.locstream.LocStream":{copy:[22,3,1,""],destroy:[22,3,1,""],lower_bounds:[22,3,1,""],name:[22,3,1,""],rank:[22,3,1,""],size:[22,3,1,""],upper_bounds:[22,3,1,""]},"ESMF.api.mesh":{Mesh:[24,1,1,""]},"ESMF.api.mesh.Mesh":{add_elements:[24,3,1,""],add_nodes:[24,3,1,""],area:[24,3,1,""],coord_sys:[24,3,1,""],coords:[24,3,1,""],copy:[24,3,1,""],destroy:[24,3,1,""],free_memory:[24,3,1,""],get_coords:[24,3,1,""],mask:[24,3,1,""],rank:[24,3,1,""],size:[24,3,1,""],size_owned:[24,3,1,""]},"ESMF.api.regrid":{Regrid:[25,1,1,""],RegridFromFile:[26,1,1,""]},"ESMF.api.regrid.Regrid":{__call__:[25,3,1,""],copy:[25,3,1,""],destroy:[25,3,1,""],get_factors:[25,3,1,""],get_weights_dict:[25,3,1,""]},"ESMF.api.regrid.RegridFromFile":{__call__:[26,3,1,""],copy:[26,3,1,""],destroy:[26,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"1e20":16,"1st":16,"1x2":18,"2nd":16,"3rd":16,"5deg_grid":16,"boolean":[14,16,18,24],"byte":12,"case":[14,16],"catch":[14,16],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,17,18,19,20,22,23,24,25,26],"default":[3,14,17,18,20,22,23,24,25,26],"final":[14,23],"float":[16,18,24,25],"function":[14,19,21,25,26],"import":[14,16,19],"int":[17,18,22,24,25],"new":[8,16,20],"return":[13,16,17,18,22,23,24,25,26],"short":14,"true":[14,16,18,22,25],"try":[14,16],"while":[14,21],DEs:18,For:[14,17,18,22,24,25,26],Ids:[14,16],Los:15,NOT:[14,18,24],One:[9,14],The:[1,2,5,6,8,10,14,16,17,18,19,20,21,22,23,24,25,26],Their:22,Then:14,There:[14,20,21,22],These:[14,16,21,25],Use:[1,4],Using:[14,19],Will:10,__call__:[25,26],__del__:23,__init__:23,abil:20,abl:[8,22],about:[14,17,18,22,24,25,26],abov:[8,14],abs:16,access:[14,15,21],accomplish:14,accord:25,account:[10,16],accur:10,achiev:14,across:[8,10,14,18,21],action:[13,14,25],activ:14,actual:20,add:[14,16,18,24],add_ax:16,add_coord:[16,18],add_corner_stagg:[14,16,18],add_el:[14,16,24],add_item:[14,16,18],add_mask:[14,18],add_nod:[14,16,24],add_subplot:16,add_user_area:[14,18,24],added:[20,24],adding:[14,24,25,26],addit:[7,10,14,25],affect:[14,20],after:[14,24,25],again:20,alamo:15,algorithm:21,alia:23,alias:[18,24],all:[3,8,14,16,17,18,21,22,24],allavg:[8,25],alloc:[16,17,18,19,24],allow:[7,14,20,23,24],alon:16,along:[3,14,24,25],alreadi:18,also:[0,7,10,14,18,21,23,24],alter:14,altern:20,alwai:[14,23,24,25],among:14,amount:[10,25],anaconda:19,analog:[25,26],analysi:21,analyt:19,ani:[9,14,16,20,21,22,25],anoth:14,api:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,22,23,24,25,26],appendic:19,appli:[9,14,16,20,25],applic:[3,14,20,21,23],appropri:[14,21,22],approxim:[3,10],arakawa:14,arang:[14,16],arbitrari:16,architectur:20,area:[2,7,16,17,18,21,24],areafield:16,areatyp:18,arg:[14,16],argument:[3,14,16,17,18,22,24,25,26],argv:[14,16],around:[8,14],arrai:[14,16,17,18,22,24,25],artifici:[8,14,25],ask:16,aspect:[16,20],assert:16,assign:[14,18],assimil:[14,22],associ:[14,17,18,22,24,25,26],assum:14,assumpt:[14,22],atexit:23,atmospher:21,attach:[14,25],attempt:14,attribut:18,auto:16,avail:[14,16,18,20,21,25],averag:[8,10,25],backend:[14,16],bandwidth:20,barrier:16,base:[1,10,14,20],basic:21,becaus:[8,10,14],been:[14,16,18],befor:[14,24,25,26],begin:14,behav:14,behavior:14,being:[9,14],below:[8,18,24,25],besid:[2,14,22],better:[10,14,21],between:[3,8,10,14,16,21,24,25,26],big:8,bilinear:[10,14,16,21,25],bind:20,block:[16,18],bob:16,bold:16,bool:[18,22,23,24,25],both:[0,3,14,16,20,21,24],bottom:[8,11],bound:[3,16,17,18,22],boundari:[14,24],broken:21,bug:21,build:[14,16,20,21],built:[14,16,17,20],bundl:20,cache_data:16,cache_data_fil:16,calcul:[2,3,7,10,14,16,18,21,24,25],call:[14,16,21,22,23,24,25,26],can:[2,3,5,8,11,14,16,17,18,20,21,22,23,24],cannot:[14,20,24],capabl:[14,20,21,23],cart:[0,3,16,22,25],cartesian:[0,3,14,16,21,22],categor:21,cax:16,cbar_ax:16,cell:[3,7,10,11,16,17,18,21,24,25],center:[8,10,11,14,16,17,18],center_vcent:[11,16,17,18],center_vfac:11,certain:14,chang:21,channel:20,characterist:14,charg:14,check:25,choic:14,choos:21,chosen:14,circl:[3,14,21],climat:[14,21],clockwis:16,closest:10,cmap:16,code:[13,14,16,18,19],col:25,col_src:25,collect:[19,21],collector:25,colorbar:16,combin:[5,10,14],come:14,comm:[14,16],comm_world:[14,16],command:[20,21],common:[14,16],commonli:[14,21],commun:21,compat:14,complet:14,compliant:[17,18,24],compon:[8,20,21],compos:[14,24],comput:[14,18,19],compute_error:16,compute_mass_grid:16,concaten:[16,24],concept:22,conda:20,connect:[3,14,16,24,25],conserv:[2,3,7,10,14,16,18,20,21,25],conserve_2nd:[10,14],consid:[14,25],constant:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,19],construct:[5,8,10,14,22,24,25],constructor:[14,24],contact:[20,21],contain:[2,10,14,16,17,18,20,24,25],contigu:25,contribut:[16,21,25],control:[0,3,14,22,25],convent:[1,14,17,21],convers:14,convert:25,convert_to_du:[14,24],coord:[14,18,24],coord_dim:[0,18,24],coord_nam:[14,18],coord_si:[14,16,18,22,24],coord_typekind:[16,18],coordiant:16,coordin:[0,2,10,11,15,16,17,18,20,21,22,24],coordsi:[14,15,16,18,19,22,24],copi:[17,18,22,23,24,25,26],core:14,corner:[3,10,11,14,16,17,18,24],corner_vcent:11,corner_vfac:[11,16],correspond:[13,14,21,24,25,26],cos:16,could:[14,16],count:[14,16,18],counterclockwis:[14,24],counterpart:14,coupl:21,cover:14,creat:[1,10,17,18,19,20,21,22,23,24,25,26],create_field:16,create_locstream_16:16,create_locstream_16_parallel:16,create_locstream_spherical_16:16,create_locstream_spherical_16_parallel:16,create_rh:25,creation:[5,18,23,24,25,26],critic:14,ctk:16,cube:[18,20,24],current:[3,10,14,17,24,25],custom:[14,20],custom_install_loc:20,darwin:20,data:[1,2,6,9,11,14,16,17,18,21,22,24,25,26],datadir:16,dealloc:[14,25,26],debug:[14,16,23],dec:15,decompflag:18,decompos:18,decomposit:18,decount:18,deep:25,deep_copi:25,def:16,defin:[14,18,24],deg2rad:16,deg_rad:[14,16],degener:25,degre:[0,14,21],demonstr:[14,16],depend:[5,22],depth:14,deriv:[10,18,21,22],describ:[14,18,21,22,24],descript:[14,18],descriptor:[14,22],design:[14,21,23],desir:[14,16,17],dest:16,destin:[7,8,10,13,14,16,21,24,25,26],destroi:[14,17,18,22,24,25,26],detail:[14,20],determin:[10,16,18,21],dict:25,dictionari:[22,25],differ:[5,8,11,14,16,17,18,21,24],dimens:[0,5,11,16,17,18,19,22,24],dimension:[14,16,21],dir_to_esmf:20,directli:[18,24],directori:[14,20],disconnect:[14,16],discret:[17,18,19],discuss:14,distanc:[3,10,25],distant:25,distribut:[14,17],divid:7,dlats_par:16,dlons_par:16,doarea:16,document:[14,16,17,18,22,24,25,26],doe:[9,14,16,17,25],doesn:20,dofrac:16,doing:7,domain:[9,21],domask:[14,16],done:[4,7,14,20,24],down:[14,21],download:[20,21],driver:19,dst_frac_field:[16,25],dst_mask_valu:[14,16,25],dstarea:[7,25],dstfield:[16,25,26],dstfracfield:16,dstfractfield:16,dstgrid:16,dstgridcoordlat:16,dstgridcoordlon:16,dtype:[14,16,25],dual:24,due:[16,22],duplic:14,dure:[5,10,14,20,23],each:[5,8,10,14,16,17,18,22,24,25],earth:[14,21],eas:14,easiest:14,edg:[3,11,14,25],edge1:11,edge1_vcent:11,edge1_vfac:11,edge2:11,edge2_vcent:11,edge2_vfac:11,edu:[20,21],effici:14,effort:14,eight:12,either:[14,18,21,24],elem:14,elemconn:[14,16],elemcoord:16,element:[5,6,9,10,14,18,19,20,24,25],element_area:[14,24],element_conn:[14,24],element_coord:[16,24],element_count:24,element_id:[14,24],element_mask:[14,24],element_typ:[14,24],elemid:[14,16],elemtyp:[14,16],elif:[14,16],elimin:14,els:[14,16],embed:[3,14],empti:[9,24],enabl:[14,16],enclos:14,end:14,engin:14,enough:8,ensur:23,entir:[7,8,14,20],entri:[13,14,17,18,24],enumer:24,environ:[14,20],equal:[14,18],equat:14,equival:[12,14],error:[13,16,22,25],esmf:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26],esmf_comm:17,esmf_fieldregrid:[25,26],esmf_fieldregridreleas:[25,26],esmf_fieldregridstor:25,esmf_fieldsmmstor:26,esmf_install_dir:20,esmf_logfil:[14,23],esmf_regridweightgen:21,esmf_support:[20,21],esmfgrid:1,esmfmesh:[1,16,24],esmfmkfil:20,esmp_fin:23,esmp_initi:23,esmpi:[12,14,19,21,23],esmpy_example_weight_fil:16,esmpymanag:23,essenti:14,etc:[14,17,18,20],even:18,everi:[9,18,20],exampl:[14,16,20,22],except:[3,14,16],execut:[16,19],exist:17,exit:23,expect:[3,14],explain:14,explicit:[14,23,25,26],explicitli:23,expon:25,extens:14,extent:16,extern:20,extra:[16,17],extrap_dist_expon:25,extrap_method:25,extrap_num_src_pnt:25,extrapmethod:25,extrapol:[21,25],face:[5,11],fact:14,factor:25,factors_index:25,fail:16,fals:[16,18,23,24,25],fanci:14,fast:21,featur:14,feel:14,few:14,field:[2,6,9,10,14,15,19,20,21,22,24,25,26],fieldbundl:20,fig:16,figur:16,file:[1,4,17,18,19,20,21,23,24,25,26],fileformat:[14,15,16,18,19,24],filenam:[16,17,18,24,25,26],filetyp:[16,18,24],fill:8,finit:14,first:[10,11,14,18,20,21,23,25],flag:[0,1,4,14,20,23,25],flat:8,float32:12,float64:[12,25],follow:[0,3,5,14,16,17,20,22,23,25,26],fontsiz:16,fontweight:16,forecast:[14,21],forg:20,form:[8,14],format:[1,16,18,19,20,21,24],fortran:[14,16,17,18,22,24],found:[14,20,25],four:[12,14],fracarea:7,fracfield:16,fraction:[7,16],framework:[14,21],free:24,free_memori:24,frequent:18,friendli:[17,25],from:[1,5,8,10,11,17,18,19,21,22,23,24,25,26],from_fil:18,full:14,fulli:21,further:14,garbag:[19,25],gather:16,gener:[18,20,21,22,25],geometri:[14,18],get:[11,16,19],get_area:[14,16,17],get_coord:[0,14,16,18,24],get_factor:25,get_item:[14,18],get_par:[14,16],get_rank:[14,16],get_weights_dict:25,getcwd:16,gfortran:20,gist_ncar:16,give:[10,16,21],given:[7,10,14,16,18],global:[14,16,21],gml:16,goe:[14,25,26],good:21,gov:15,gradient:[10,21],great:[3,14,21],great_circl:[3,25],greater:18,grid1:16,grid2:16,grid:[0,1,2,3,7,8,10,11,15,17,19,20,21,24,25,26],grid_create_from_coordin:16,grid_create_from_coordinates_3d:16,grid_create_from_coordinates_period:16,grid_imask:14,griditem:[14,15,16,18,19],gridlat:[14,16],gridlatcorn:14,gridlon:[14,16],gridloncorn:14,gridspec:[1,16,18,21],gridxcent:16,gridxcoord:16,gridxcorn:16,gridycent:16,gridycoord:16,gridycorn:16,gridzcent:16,gridzcorn:16,guid:20,hand:14,handl:[14,16,21,25,26],happen:[25,26],has:[14,16,18,21],has_corn:18,have:[14,16,17,18,24,25],height:22,held:14,hello:[14,19],hello_world:14,help:14,helper:19,here:[7,8,14,20],hex:5,hexagon:14,hexahedr:5,hexahedron:14,high:14,higher:[10,14,21,25],highli:14,hold:[6,14,16,24,25,26],hole:8,home:[14,20,21],how:[0,3,4,14,16,17,20,21,25],howev:[8,10,14,16,25],http:15,ident:14,identifi:[14,22],ids:[14,24],ignor:[13,14,16,21,25],ignore_degener:25,impli:14,importerror:16,imshow:16,inappropri:14,includ:[10,14,20,21,22],ind:16,index:[16,17,18,19,25],indic:[0,1,8,12,13,14,25,26],individu:[10,14,17,18,20,22,24],influenc:[3,14,25],info:14,inform:[14,17,18,20,21,22,23,24,25,26],initi:[9,14,17,19,20,23,25],initialize_field_grid_period:16,input:[10,14,24,25],instal:[16,19],instanc:18,instead:[8,14],instruct:20,int32:[12,14,16,25],int64:12,integ:[12,14,18,24],integr:[10,14,20,21],interfac:[14,17,19,20,21],intern:[14,18,22],interpol:[3,8,10,14,15,16,21,25,26],interpret:[0,14],intervent:14,invok:14,involv:[2,14,16],irregularli:14,is_spher:[14,18],isdir:16,isfil:16,isn:14,issu:[4,16,20,21],item:[2,14,17,18],its:[10,14,17],job:14,join:16,juli:16,just:7,kei:[14,22,25],kind:[2,12,14,21],known:[14,21,24],lacc:15,lambda:16,land:[14,21],lanl:15,lapack:20,larg:14,larger:[10,24],last:[15,17],lat:[14,16,18,22,24],lat_corn:[14,16],lat_par:16,latest:21,latitud:[0,14,16,18],latlon:16,latm:[14,16],latm_corn:14,layer:14,layout:[9,14],lbx:16,lby:16,lbz:16,leak:25,least:[14,17,21],len:[14,16],length:18,less:[10,14,18],level:[14,20],lib:20,librari:[12,14,20,22,24],lie:[3,8],lifetim:14,like:[10,14,16,20,21],likewis:14,limit:19,line:[3,14,21,25],line_typ:25,linear:[10,14,21],linetyp:[14,15,19,25],link:[14,19],linspac:14,linux:20,list:[14,16,17,18,20,22,24,25],littl:14,ll1deg_grid:16,ll2:16,local:[14,18],local_pet:[14,16,23],locat:[6,10,11,14,16,17,18,20,22,24],location_count:22,locstream:[15,17,19,21,25,26],locstream_util:16,log:[4,16,19,23],logfil:23,logic:[14,18,21],logkind:[14,15,19],lon:[14,16,18,22,24],lon_corn:[14,16],lon_par:16,longer:24,longitud:[0,14,16,18],lonm:[14,16],lonm_corn:14,loop:25,lot:20,low:14,lower:[14,16,17,18,22],lower_bound:[16,17,18,22],machin:[14,16,20],made:14,mai:[1,2,8,10,14,18,21,24,25,26],main:[10,16],maintain:14,make:[3,14,16,22,24,25],makedir:16,manag:[15,16,19,20,25,26],mani:[14,18,20,21,25],manifold:[14,24],manner:[14,16,17,18,22,24,25,26],manual:[14,20,24],map:[0,8,9,10,17,18,21,25],mark:14,mask:[2,16,18,19,21,22,24,25],mask_flag:24,mask_valu:16,mass:[19,25],matplotlib:16,matrix:[10,13,16,21],max:16,max_index:[16,18],maxproc:[14,16],mean:[14,16,17],meanrelerr:16,memori:[14,16,17,18,20,22,24,25,26],mesh:[1,5,6,7,10,15,17,19,20,21,25,26],mesh_create_5:16,mesh_create_5_parallel:16,mesh_util:16,meshelemtyp:[14,15,16,19,24],meshgrid:[14,16],meshloc:[14,15,16,17,19,24],meshnam:24,messag:[4,14],metadata:[14,17,24],method:[0,3,10,11,14,21,23,25],might:14,min:16,mismatch:[8,22],miss:18,missing_valu:18,mix:[14,22],mode:14,model:[14,21],modif:16,modifi:16,modul:19,more:[10,14,17,18,21,22,24,25,26],most:[14,18],move:24,mpas_uniform_10242_dual_counterclockwis:16,mpi4pi:[14,16,20],mpi:[19,20],mpich:[14,16],mpirun:19,mpiuni:17,much:[4,10,14],mul:16,multi:[4,14,20],multipl:[4,10,14,17,18,21],must:[14,16,17,20,22,24],name:[16,17,18,19,20,22,23,24,26],nativ:14,natur:14,ndarrai:[17,24,25],ndbound:[14,16,17],nearest:[10,14,21],nearest_dto:[10,14,16],nearest_idavg:25,nearest_stod:[10,14],nearli:14,necessari:[14,16],need:[10,14,16,17,20,21,22,24],neighbor:[10,21],nesii:20,netcdf:[1,14,17,18,20,21,24,25],next:8,nice:21,nightli:20,nodal:14,node:[6,8,14,16,17,24],node_coord:[14,24],node_count:24,node_id:[14,24],node_mask:14,node_own:[14,24],nodecoord:[14,16],nodeid:[14,16],nodeown:[14,16],non:14,none:[4,8,11,16,17,18,22,23,24,25,26],norm_typ:25,normal:[7,14,25],normtyp:[14,15,19,25],nose:20,nosetest:20,note:[14,16,17,21,24],novemb:16,now:[8,14],npntavg:8,num_elem:[14,16],num_nod:[14,16],num_peri_dim:[14,16,18],number:[8,14,16,17,18,20,22,23,24,25],numer:25,numpi:[12,16,18,19,20,24,25],object:[1,9,16,17,18,19,20,21,22,23,24,25,26],observ:[14,21,22],occasion:16,occur:[8,25],ocean:14,oceans11:15,offlin:20,onc:14,one:[4,10,14,16,17,18,21,25],ongo:24,onli:[3,10,14,16,17,18,20,23,24,25,26],onto:[8,17],openmpi:[14,16,20],oper:[9,14,16,18,21,24,25,26],oppos:9,option:[3,7,8,14,16,17,18,20,21,22,24,25,26],order:[0,10,16,19,21,24],origin:[9,14,21,23],other:[0,2,7,14,21,22,25],otherwis:18,out:[8,14,21,25,26],outer:16,outlin:[18,24],output:[14,16,23,25],outsid:21,over:[18,25],overlap:[7,10,21],overview:19,overwritten:[25,26],own:[14,24],owner:14,ownership:14,packag:[14,15,19,21],pad:14,page:[14,19,20,21],pair:14,parallel:[19,20,21],param:[16,17],paramet:[8,14,17,18,22,23,24,25,26],parametr:[5,14,16,24],parametric_dim:[14,16,24],parent:[14,16],part:[7,14,24],particip:14,particular:[14,20,22],pass:14,patch:[10,14,21],path:[3,16,20,21,25],per:[4,14,17],perfect:14,perform:[14,18],perimet:14,period:[18,19],periodic_dim:[14,16,18],persist:14,pet:[4,14,16,18,23],pet_count:[14,16,23],physic:[14,17,18],piec:[14,16],place:[8,14,21],plane:[3,14],platform:[20,21],pleas:[17,18,20,21,22,24,25,26],plot:16,plt:16,point:[3,8,10,13,14,21,22,24,25],pointer:[16,20],polar:14,pole:[8,18,21,25],pole_dim:[14,16,18],pole_method:25,polemethod:[14,15,19,25],polygon:14,polynomi:[10,21],portion:[9,14],posit:[11,14,22],possibl:14,post:14,postcondit:16,power:14,precondit:16,prefix:20,present:14,preserv:[10,21],print:[14,16],prior:[14,23],probabl:[14,16],problem:21,proce:25,process:[14,16,21],processor:[16,20,24],prod:16,produc:[7,10,21,25],product:18,program:[14,16,20],project:[8,21],propag:14,properli:[14,23],properti:[14,17,18,22,23,24],proport:21,provid:[10,14,18,21,24],purpos:10,put:14,pyplot:16,python:[14,17,18,19,20,21,22,23,24,25],pythonpath:20,quad:[5,14,16],quadrilater:[5,14],qualiti:21,quantiti:[3,14],queri:14,question:[20,21],radian:[0,14,16],radiu:[0,14,22],rais:[14,16,25],rang:[8,14,16],rank:[14,16,17,18,22,23,24],ravel:16,read:[14,17,18,19,21,25,26],real:12,receiv:[10,14],recogn:22,recommend:14,recoveri:[10,21],rectangular:[14,18,21],reduc:[16,25],reduce_v:16,refer:[0,2,14,17,19,20,25],referenc:[14,17,18,20,22,24],reg_decomp:18,regdecompptil:18,region:[14,15,16,18,19,21,24,25,26],regist:23,regress:20,regrid:[0,2,3,7,8,9,10,15,18,19,20,21,24,26],regrid_from_fil:20,regrid_method:[16,25],regrid_pole_npoint:25,regridfromfil:[14,15,16,19],regrididng:24,regridmethod:[14,15,16,19,25],regridpolenpnt:8,regridsrc2dst:16,regular:22,rel:[16,20],relat:[20,21],relationship:[14,17],releas:[15,17,18,21,22,24,25,26],relerr:16,remain:18,remap:[15,21],rememb:[14,25],remov:16,replic:17,repositori:16,repres:[2,14,17,18,21,22,24,25,26],represent:14,requir:[14,17,18,19,24,25,26],reshap:16,resourc:[18,19],respect:[13,14,25],rest:8,restrict:14,result:[10,13,14,16,21,22,23,25,26],retain:9,retriev:[11,14,16,20,23,25,26],reus:14,right:16,robust:21,root:16,routehandl:10,routin:[12,14],row:[8,25],row_dst:25,run:[14,19,20],run_regrid:16,runtim:23,safe:[17,18,22,24,25,26],same:[14,17,18,20,24],scalabl:[14,21],scope:[25,26],scrip:[1,15,16,18,21,24],script:[14,16],search:19,second:[10,11,14,18,21,22,25],section:14,see:[14,17,18,21,22,24,25,26],seem:16,seen:14,select:[7,9,16,25],send:16,sendobj:16,separ:21,sequenti:18,serial:[14,19,20],set:[5,8,11,14,16,18,20,21,22,23,24,25],set_titl:16,set_xbound:16,set_xlabel:16,set_ybound:16,set_ylabel:16,setenv:20,setup:20,shallow:[17,18,22,24,25,26],shape:[3,14,16,24,25],share:[17,20],shell:20,shortcut:14,shortest:3,should:[4,9,14,16,24,25],show:16,shutdown:[14,16],side:[5,14,18],signific:14,similar:14,similarli:14,simpl:21,simplest:14,simpli:20,simplif:14,simplifi:14,sin:16,sinc:14,singl:[1,14,17,18,20,21,24],singleton:23,site_packag:20,size:[8,14,16,18,22,24],size_own:24,skip:25,slats_par:16,slice:19,slightli:[14,16],slons_par:16,small:[14,20,24],smaller:[14,24],smooth:14,smoother:[10,21],snippet:16,so_omon_giss:16,softwar:[15,21],solut:16,some:[2,8,14,18,20],sourc:[7,8,10,14,16,19,21,24,25,26],space:[3,14,18,21,24],spars:[13,21],spatial:[16,19,24],spatial_dim:[14,16,24],spawn:19,special:14,specif:[1,14,20,24],specifi:[3,4,9,10,11,14,16,17,18,20,22,24,25,26],sph_deg:[0,14,16,18,22,24],sph_rad:[0,14,16,22],sphere:[3,8,14,18,20,21,24,25],spheric:[0,15,18,21],squar:[14,21,24],src:20,src_frac_field:[16,25],src_mask_valu:[14,16,25],srcfield:[16,25,26],srcfracfield:16,srcgrid:16,srcgridcoordlat:16,srcgridcoordlon:16,stage:21,stagger:[10,11,16,17,18],staggerloc:[14,15,16,17,18,19],stand:16,standard:[14,20,22],start:[14,16],start_work:16,statu:21,stencil:10,step:[14,18,24],still:[8,14],store:[14,17,18,22,25],str:[14,17,18,22,24],straight:[3,21],strategi:14,stream:[21,22],stress:20,string:[16,24,25,26],structur:[1,14,21],style:16,subplots_adjust:16,subprocess:16,subsequ:23,subset:20,succe:20,success:14,successfulli:16,suffici:[14,18],suitabl:21,sum:[10,16,18,24],support:[14,17,18,20,21,24],suptitl:16,sure:16,surfac:[3,14,24,25],surround:[8,10],symmetr:14,syntax:22,sys:[14,16],system:[0,14,16,18,21,22,24],tabl:14,take:[10,13,14,20,21,25],target:20,task:14,techniqu:14,teeth:8,tell:[11,16,18,24],temperatur:17,tempor:14,term:[10,14,24],test:20,test_api:20,test_exampl:20,test_examples_parallel:20,test_field_regrid:20,test_parallel:20,test_regrid:20,test_regrid_from_fil:20,test_regrid_from_file_dryrun:20,test_regrid_from_file_parallel:20,testregrid:20,tetra:5,tetrahedr:5,tetrahedra:14,tetrahedron:14,than:[10,14,18,21,24,25],thei:[14,22],them:[14,16,20],therefor:[14,18],thi:[0,1,2,3,4,7,8,9,10,12,13,14,16,17,18,20,21,22,23,24,25,26],thin:14,thing:14,third:14,those:[14,17,18,22,24,25],though:25,thought:[14,22],thread:14,three:14,through:[3,14,18,20,21],thu:[10,14],tight:25,tile:[1,18,20,21],tiles:18,time:[14,17,20,23,24],timeslic:[16,17],todo:16,togeth:14,toler:16,top:[8,11,14,20],topolog:[14,18,24],total:[9,14,18,23,25,26],trac:15,transform:21,translat:14,transpar:14,treat:25,tri:[5,14,16],triangl:[8,14],triangular:5,trigger:14,tupe:25,tupl:[17,24,25],turn:[3,25],tutori:[14,19],two:[3,14,16,18,21,24,25,26],type:[0,3,5,7,8,12,14,16,17,18,22,24,25],typekind:[14,15,16,17,18,19],typic:10,ubi:16,ubx:16,ubz:16,ucar:[20,21],ugrid:[1,21,24],uncom:16,unconnect:21,underli:[12,14,17,18,22,24,25,26],underneath:21,ungrid:17,uniform:16,uninitv:16,uniqu:14,unit:14,unmap:[13,14,21,25],unmapped_act:[16,25],unmappedact:[14,15,16,19,25],unmask:14,unstructur:[1,14,16,21,24],until:14,unus:14,updat:14,upon:[14,17],upper:[16,17,18,22],upper_bound:[16,17,18,22],usag:[14,16],use:[9,10,14,16,18,20,24,25],used:[2,4,5,6,7,12,13,14,16,17,18,21,22,24,25,26],useful:[0,8,14,21],user:[0,7,14,17,18,20,23,25],uses:[14,16,21],using:[0,8,14,16,17,18,20,21,22,23,25],util:[14,16,21],valid:[5,14,19,22],valu:[0,8,9,10,14,16,17,18,20,21,22,24,25,26],valueerror:[14,16],valuefield:16,vari:14,variabl:[14,16,17,18,20,24],variant:21,varieti:[14,21],variou:[9,14,21],varnam:[14,18,24],vector:8,veri:14,versa:21,version:[10,20,21],vertex:[14,17,24],vertic:[3,11],via:25,vice:21,virtual:14,visual:21,vmax:16,vmin:16,vtk:1,wai:[14,18,24],wave:16,weather:21,weight:[3,7,10,14,19,21,25,26],welcom:19,well:14,were:14,what:13,when:[3,7,11,14,17,20,21,23,25,26],where:[11,14,16,18,25],wherebi:14,whether:[14,16,18,23,24],which:[3,5,7,8,10,14,16,17,21,23,24,25,26],whole:14,whose:14,wide:21,within:[14,22],without:[14,16,17,20,25],won:[8,14],word:[7,14],work:[10,14,16,20],worker:[14,16],world:[14,19,22],would:[3,14,24],wrap:20,wrapper:[14,17,18,22,24],write:19,written:20,x_par:16,xcoord:16,xcoordin:16,xcorner:16,xctfield:16,y_par:16,ycoord:16,ycoordin:16,ycorner:16,z_par:16,zcoord:16,zcoordin:16,zcorner:16,zero:[8,14,16,25,26],zero_region:[16,25,26]},titles:["CoordSys","FileFormat","GridItem","LineType","LogKind","MeshElemType","MeshLoc","NormType","PoleMethod","Region","RegridMethod","StaggerLoc","TypeKind","UnmappedAction","API","Appendices","Tutorials","Field","Grid","Table of Contents","Installation","Overview","LocStream","Manager","Mesh","Regrid","RegridFromFile"],titleterms:{"class":[14,15],"function":16,"import":[20,21],Using:16,alloc:14,anaconda:20,analyt:16,api:[14,15],appendic:15,area:14,cell:14,code:20,collect:14,comput:16,constant:[14,15],content:19,coordin:14,coordsi:0,creat:[14,16],creation:14,dimens:14,discret:14,driver:16,element:16,esmfmesh:14,esmpi:[16,20],execut:14,field:[16,17],file:[14,16],fileformat:1,format:14,from:[14,16,20],garbag:14,gener:14,get:20,grid:[14,16,18],griditem:2,gridspec:14,hello:16,helper:16,index:14,initi:16,instal:20,limit:20,linetyp:3,link:21,locstream:[14,16,22],log:14,logkind:4,manag:[14,23],mask:14,mass:16,mesh:[14,16,24],meshelemtyp:5,meshloc:6,mpi:[14,16],mpirun:14,name:[14,15],normtyp:7,numpi:14,object:14,order:14,overview:21,packag:20,parallel:[14,16],period:[14,16],pole:14,polemethod:8,python:16,read:16,refer:15,region:9,regrid:[14,16,25],regridfromfil:26,regridmethod:10,requir:20,resourc:14,run:16,scrip:14,serial:16,slice:14,sourc:20,spatial:14,spawn:[14,16],spheric:14,stagger:14,staggerloc:11,tabl:19,tutori:16,typekind:12,ugrid:14,unmappedact:13,valid:20,weight:16,world:16,write:16}})