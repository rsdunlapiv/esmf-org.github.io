Search.setIndex({docnames:["CoordSys","FileFormat","GridItem","LineType","LogKind","MeshElemType","MeshLoc","NormType","PoleKind","PoleMethod","Region","RegridMethod","StaggerLoc","TypeKind","UnmappedAction","api","appendix","examples","field","grid","index","install","intro","locstream","manager","mesh","regrid","regridfromfile"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["CoordSys.rst","FileFormat.rst","GridItem.rst","LineType.rst","LogKind.rst","MeshElemType.rst","MeshLoc.rst","NormType.rst","PoleKind.rst","PoleMethod.rst","Region.rst","RegridMethod.rst","StaggerLoc.rst","TypeKind.rst","UnmappedAction.rst","api.rst","appendix.rst","examples.rst","field.rst","grid.rst","index.rst","install.rst","intro.rst","locstream.rst","manager.rst","mesh.rst","regrid.rst","regridfromfile.rst"],objects:{"":{ESMF:[22,0,0,"-"]},"ESMF.api.constants":{CoordSys:[0,1,1,""],FileFormat:[1,1,1,""],GridItem:[2,1,1,""],LineType:[3,1,1,""],LogKind:[4,1,1,""],MeshElemType:[5,1,1,""],MeshLoc:[6,1,1,""],NormType:[7,1,1,""],PoleKind:[8,1,1,""],PoleMethod:[9,1,1,""],Region:[10,1,1,""],RegridMethod:[11,1,1,""],StaggerLoc:[12,1,1,""],TypeKind:[13,1,1,""],UnmappedAction:[14,1,1,""]},"ESMF.api.constants.CoordSys":{CART:[0,2,1,""],SPH_DEG:[0,2,1,""],SPH_RAD:[0,2,1,""]},"ESMF.api.constants.FileFormat":{ESMFGRID:[1,2,1,""],ESMFMESH:[1,2,1,""],GRIDSPEC:[1,2,1,""],SCRIP:[1,2,1,""],UGRID:[1,2,1,""],VTK:[1,2,1,""]},"ESMF.api.constants.GridItem":{AREA:[2,2,1,""],MASK:[2,2,1,""]},"ESMF.api.constants.LineType":{CART:[3,2,1,""],GREAT_CIRCLE:[3,2,1,""]},"ESMF.api.constants.LogKind":{MULTI:[4,2,1,""],NONE:[4,2,1,""]},"ESMF.api.constants.MeshElemType":{HEX:[5,2,1,""],QUAD:[5,2,1,""],TETRA:[5,2,1,""],TRI:[5,2,1,""]},"ESMF.api.constants.MeshLoc":{ELEMENT:[6,2,1,""],NODE:[6,2,1,""]},"ESMF.api.constants.NormType":{DSTAREA:[7,2,1,""],FRACAREA:[7,2,1,""]},"ESMF.api.constants.PoleKind":{BIPOLE:[8,2,1,""],MONOPOLE:[8,2,1,""],NONE:[8,2,1,""]},"ESMF.api.constants.PoleMethod":{ALLAVG:[9,2,1,""],NONE:[9,2,1,""],NPNTAVG:[9,2,1,""],TEETH:[9,2,1,""]},"ESMF.api.constants.Region":{EMPTY:[10,2,1,""],SELECT:[10,2,1,""],TOTAL:[10,2,1,""]},"ESMF.api.constants.RegridMethod":{BILINEAR:[11,2,1,""],CONSERVE:[11,2,1,""],CONSERVE_2ND:[11,2,1,""],NEAREST_DTOS:[11,2,1,""],NEAREST_STOD:[11,2,1,""],PATCH:[11,2,1,""]},"ESMF.api.constants.StaggerLoc":{CENTER:[12,2,1,""],CENTER_VCENTER:[12,2,1,""],CENTER_VFACE:[12,2,1,""],CORNER:[12,2,1,""],CORNER_VCENTER:[12,2,1,""],CORNER_VFACE:[12,2,1,""],EDGE1:[12,2,1,""],EDGE1_VCENTER:[12,2,1,""],EDGE1_VFACE:[12,2,1,""],EDGE2:[12,2,1,""],EDGE2_VCENTER:[12,2,1,""],EDGE2_VFACE:[12,2,1,""]},"ESMF.api.constants.TypeKind":{I4:[13,2,1,""],I8:[13,2,1,""],R4:[13,2,1,""],R8:[13,2,1,""]},"ESMF.api.constants.UnmappedAction":{ERROR:[14,2,1,""],IGNORE:[14,2,1,""]},"ESMF.api.esmpymanager":{Manager:[24,1,1,""]},"ESMF.api.field":{Field:[18,1,1,""]},"ESMF.api.field.Field":{copy:[18,3,1,""],data:[18,3,1,""],destroy:[18,3,1,""],get_area:[18,3,1,""],grid:[18,3,1,""],lower_bounds:[18,3,1,""],name:[18,3,1,""],ndbounds:[18,3,1,""],rank:[18,3,1,""],read:[18,3,1,""],staggerloc:[18,3,1,""],type:[18,3,1,""],upper_bounds:[18,3,1,""],xd:[18,3,1,""]},"ESMF.api.grid":{Grid:[19,1,1,""]},"ESMF.api.grid.Grid":{add_coords:[19,3,1,""],add_item:[19,3,1,""],area:[19,3,1,""],areatype:[19,3,1,""],coord_sys:[19,3,1,""],coords:[19,3,1,""],copy:[19,3,1,""],destroy:[19,3,1,""],get_coords:[19,3,1,""],get_item:[19,3,1,""],has_corners:[19,3,1,""],lower_bounds:[19,3,1,""],mask:[19,3,1,""],max_index:[19,3,1,""],num_peri_dims:[19,3,1,""],periodic_dim:[19,3,1,""],pole_dim:[19,3,1,""],rank:[19,3,1,""],size:[19,3,1,""],staggerloc:[19,3,1,""],type:[19,3,1,""],upper_bounds:[19,3,1,""]},"ESMF.api.locstream":{LocStream:[23,1,1,""]},"ESMF.api.locstream.LocStream":{copy:[23,3,1,""],destroy:[23,3,1,""],lower_bounds:[23,3,1,""],name:[23,3,1,""],rank:[23,3,1,""],size:[23,3,1,""],upper_bounds:[23,3,1,""]},"ESMF.api.mesh":{Mesh:[25,1,1,""]},"ESMF.api.mesh.Mesh":{add_elements:[25,3,1,""],add_nodes:[25,3,1,""],area:[25,3,1,""],coord_sys:[25,3,1,""],coords:[25,3,1,""],copy:[25,3,1,""],destroy:[25,3,1,""],free_memory:[25,3,1,""],get_coords:[25,3,1,""],mask:[25,3,1,""],rank:[25,3,1,""],size:[25,3,1,""],size_owned:[25,3,1,""]},"ESMF.api.regrid":{Regrid:[26,1,1,""],RegridFromFile:[27,1,1,""]},"ESMF.api.regrid.Regrid":{__call__:[26,3,1,""],copy:[26,3,1,""],destroy:[26,3,1,""],get_factors:[26,3,1,""],get_weights_dict:[26,3,1,""]},"ESMF.api.regrid.RegridFromFile":{__call__:[27,3,1,""],copy:[27,3,1,""],destroy:[27,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"1e20":17,"1st":17,"1x2":19,"2nd":17,"3rd":17,"5deg_grid":17,"boolean":[15,17,19,25],"byte":13,"case":[15,17],"catch":[15,17],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,18,19,20,21,23,24,25,26,27],"default":[3,15,18,19,21,23,24,25,26,27],"final":[15,24],"float":[17,19,25,26],"function":[15,20,22,26,27],"import":[15,17,20],"int":[18,19,23,25,26],"long":8,"new":[9,17,21],"return":[14,17,18,19,23,24,25,26,27],"short":15,"true":[15,17,19,23,26],"try":[15,17],"while":[15,22],DEs:19,For:[15,18,19,23,25,26,27],Ids:[15,17],Los:16,NOT:[15,19,25],One:[10,15],The:[1,2,5,6,9,11,15,17,18,19,20,21,22,23,24,25,26,27],Their:23,Then:15,There:[15,21,22,23],These:[15,17,22,26],Use:[1,4],Using:[15,20],Will:11,__call__:[26,27],__del__:24,__init__:24,_esmf_mpirun_np:[],abil:21,abl:[9,23],about:[15,18,19,23,25,26,27],abov:[9,15],abs:17,access:[15,16,22],accomplish:15,accord:26,account:[11,17],accur:11,achiev:15,across:[9,11,15,19,22],action:[14,15,26],activ:15,actual:21,add:[15,17,19,25],add_ax:17,add_coord:[17,19],add_corner_stagg:[15,17,19],add_el:[15,17,25],add_item:[15,17,19],add_mask:[15,19],add_nod:[15,17,25],add_subplot:17,add_user_area:[15,19,25],added:[21,25],adding:[15,25,26,27],addit:[7,11,15,26],affect:[15,21],after:[15,25,26],again:21,alamo:16,algorithm:22,alia:24,alias:[19,25],all:[3,9,15,17,18,19,22,23,25],allavg:[9,26],alloc:[17,18,19,20,25],allow:[7,15,21,24,25],alon:17,along:[3,15,25,26],alreadi:19,also:[0,7,11,15,19,22,24,25],alter:15,altern:21,alwai:[15,24,25,26],among:15,amount:[11,26],anaconda:20,analog:[26,27],analysi:22,analyt:20,ani:[10,15,17,21,22,23,26],anoth:15,api:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20,21,23,24,25,26,27],appear:15,appendic:20,appli:[10,15,17,21,26],applic:[3,15,21,22,24],appropri:[15,22,23],approxim:[3,11],arakawa:15,arang:[15,17],arbitrari:17,architectur:21,area:[2,7,17,18,19,22,25],areafield:17,areatyp:19,arg:[15,17],argument:[3,15,17,18,19,23,25,26,27],argv:[15,17],around:[9,15],arrai:[15,17,18,19,23,25,26],artifici:[9,15,26],ask:17,aspect:[17,21],assert:17,assign:[15,19],assimil:[15,23],associ:[15,18,19,23,25,26,27],assum:15,assumpt:[15,23],atexit:24,atmospher:22,attach:[15,26],attempt:15,attribut:19,auto:17,avail:[15,17,19,21,22,26],averag:[9,11,26],backend:[15,17],bandwidth:21,barrier:17,base:[1,11,15,21],basic:22,becaus:[9,11,15],been:[15,17,19],befor:[15,25,26,27],begin:15,behav:15,behavior:15,being:[10,15],below:[9,19,25,26],besid:[2,15,23],better:[11,15,22],between:[3,9,11,15,17,22,25,26,27],big:9,bilinear:[11,15,17,22,26],bind:21,bipol:8,block:[17,19],bob:17,bold:17,bool:[19,23,24,25,26],both:[0,3,15,17,21,22,25],bottom:[9,12],bound:[3,17,18,19,23],boundari:[15,25],broken:22,bug:22,build:[15,17,21,22],built:[15,17,18,21],bundl:21,cache_data:17,cache_data_fil:17,calcul:[2,3,7,11,15,17,19,22,25,26],call:[15,17,22,23,24,25,26,27],can:[2,3,5,9,12,15,17,18,19,21,22,23,24,25],cannot:[15,21,25],capabl:[15,21,22,24],cart:[0,3,17,23,26],cartesian:[0,3,15,17,22,23],categor:22,cax:17,cbar_ax:17,cell:[3,7,11,12,17,18,19,22,25,26],center:[9,11,12,15,17,18,19],center_vcent:[12,17,18,19],center_vfac:12,certain:15,chang:22,channel:21,characterist:15,charg:15,check:26,choic:15,choos:22,chosen:15,circl:[3,15,22],climat:[15,22],clockwis:17,closest:11,cmap:17,code:[14,15,17,19,20],col:26,col_src:26,collect:[20,22],collector:26,colorbar:17,combin:[5,11,15],come:15,comm:[15,17],comm_world:[15,17],command:[21,22],common:[15,17],commonli:[15,22],commun:22,compat:15,complet:15,compliant:[18,19,25],compon:[9,21,22],compos:[15,25],comput:[15,19,20],compute_error:17,compute_mass_grid:17,concaten:[17,25],concept:23,conda:21,connect:[3,8,15,17,19,25,26],conserv:[2,3,7,11,15,17,19,21,22,26],conserve_2nd:[11,15],consid:[15,26],constant:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,20],construct:[5,9,11,15,23,25,26],constructor:[15,25],contact:[21,22],contain:[2,11,15,17,18,19,21,25,26],contigu:26,contribut:[17,22,26],control:[0,3,15,23,26],convent:[1,15,18,22],convers:15,convert:26,convert_to_du:[15,25],coord:[15,19,25],coord_dim:[0,19,25],coord_nam:[15,19],coord_si:[15,17,19,23,25],coord_typekind:[17,19],coordiant:17,coordin:[0,2,11,12,16,17,18,19,21,22,23,25],coordsi:[15,16,17,19,20,23,25],copi:[18,19,23,24,25,26,27],core:15,corner:[3,11,12,15,17,18,19,25],corner_vcent:12,corner_vfac:[12,17],correspond:[14,15,22,25,26,27],cos:17,could:[15,17],count:[15,17,19],counterclockwis:[15,25],counterpart:15,coupl:22,cover:15,creat:[1,11,18,19,20,21,22,23,24,25,26,27],create_field:17,create_locstream_16:17,create_locstream_16_parallel:17,create_locstream_spherical_16:17,create_locstream_spherical_16_parallel:17,create_rh:26,creation:[5,19,24,25,26,27],critic:15,ctk:17,cube:[19,21,25],current:[3,11,15,18,25,26],custom:[15,21],custom_install_loc:21,darwin:21,data:[1,2,6,10,12,15,17,18,19,22,23,25,26,27],datadir:17,dealloc:[15,26,27],debug:[15,17,24],dec:16,decompflag:19,decompos:19,decomposit:19,decount:19,deep:26,deep_copi:26,def:17,defin:[15,19,25],deg2rad:17,deg_rad:[15,17],degener:26,degre:[0,15,22],demonstr:[15,17],depend:[5,23],depth:15,deriv:[11,19,22,23],describ:[8,15,19,22,23,25],descript:[15,19],descriptor:[15,23],design:[15,22,24],desir:[15,17,18],dest:17,destin:[7,9,11,14,15,17,22,25,26,27],destroi:[15,18,19,23,25,26,27],detail:[15,21],determin:[11,17,19,22],dict:26,dictionari:[23,26],differ:[5,9,12,15,17,18,19,22,25],dimens:[0,5,12,17,18,19,20,23,25],dimension:[15,17,22],dir_to_esmf:21,directli:[19,25],directori:[15,21],disconnect:[15,17],discret:[18,19,20],discuss:15,distanc:[3,11,26],distant:26,distribut:[15,18],divid:7,dlats_par:17,dlons_par:17,doarea:17,document:[15,17,18,19,23,25,26,27],doe:[10,15,17,18,26],doesn:21,dofrac:17,doing:7,domain:[10,22],domask:[15,17],done:[4,7,15,21,25],down:[15,22],download:[21,22],driver:20,dst_file:[],dst_file_typ:[],dst_frac_field:[17,26],dst_mask_valu:[15,17,26],dstarea:[7,26],dstfield:[17,26,27],dstfracfield:17,dstfractfield:17,dstgrid:17,dstgridcoordlat:17,dstgridcoordlon:17,dtype:[15,17,26],dual:25,due:[17,23],duplic:15,dure:[5,11,15,21,24],each:[5,9,11,15,17,18,19,23,25,26],earth:[15,22],eas:15,easiest:15,edg:[3,8,12,15,26],edge1:12,edge1_vcent:12,edge1_vfac:12,edge2:12,edge2_vcent:12,edge2_vfac:12,edu:[21,22],effici:15,effort:15,eight:13,either:[15,19,22,25],elem:15,elemconn:[15,17],elemcoord:17,element:[5,6,8,10,11,15,19,20,21,25,26],element_area:[15,25],element_conn:[15,25],element_coord:[17,25],element_count:25,element_id:[15,25],element_mask:[15,25],element_typ:[15,25],elemid:[15,17],elemtyp:[15,17],elif:[15,17],elimin:15,els:[15,17],embed:[3,15],empti:[10,25],enabl:[15,17],enclos:15,end:[15,19],engin:15,enough:9,ensur:24,entir:[7,9,15,21],entri:[14,15,18,19,25],enumer:25,environ:[15,21],equal:[15,19],equat:15,equival:[13,15],error:[14,17,23,26],esmf:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27],esmf_comm:18,esmf_fieldregrid:[26,27],esmf_fieldregridreleas:[26,27],esmf_fieldregridstor:26,esmf_fieldsmmstor:27,esmf_install_dir:21,esmf_logfil:[15,24],esmf_regridweightgen:22,esmf_support:[21,22],esmfgrid:1,esmfmesh:[1,17,25],esmfmkfil:21,esmp_fin:24,esmp_initi:24,esmpi:[13,15,20,22,24],esmpy_example_weight_fil:17,esmpymanag:24,essenti:15,etc:[15,18,19,21],even:19,everi:[10,19,21],exampl:[15,17,21,23],except:[3,15,17],execut:[17,20],exist:18,exit:24,expect:[3,15],explain:15,explicit:[15,24,26,27],explicitli:24,expon:26,extens:15,extent:17,extern:21,extra:[17,18],extrap_dist_expon:26,extrap_method:26,extrap_num_src_pnt:26,extrapmethod:26,extrapol:[22,26],face:[5,12],fact:15,factor:26,factorindexlist:[],factorlist:[],factors_index:26,fail:17,fals:[17,19,24,25,26],fanci:15,fast:22,featur:15,feel:15,few:15,field:[2,6,10,11,15,16,20,21,22,23,25,26,27],fieldbundl:21,fig:17,figur:17,file:[1,4,18,19,20,21,22,24,25,26,27],file_mod:[],fileformat:[15,16,17,19,20,25],filemod:[],filenam:[17,18,19,25,26,27],filetyp:[17,19,25],fill:9,finit:15,first:[11,12,15,19,21,22,24,26],flag:[0,1,4,15,21,24,26],flat:9,float32:13,float64:[13,26],follow:[0,3,5,15,17,18,21,23,24,26,27],fontsiz:17,fontweight:17,forecast:[15,22],forg:21,form:[9,15],format:[1,17,19,20,21,22,25],fortran:[15,17,18,19,23,25],found:[15,21,26],four:[13,15],fracarea:7,fracfield:17,fraction:[7,17],framework:[15,22],free:25,free_memori:25,frequent:19,friendli:[18,26],from:[1,5,9,11,12,18,19,20,22,23,24,25,26,27],from_fil:19,full:15,fulli:22,further:15,garbag:[20,26],gather:17,gener:[19,21,22,23,26],geometri:[15,19],get:[12,17,20],get_area:[15,17,18],get_coord:[0,15,17,19,25],get_factor:26,get_item:[15,19],get_par:[15,17],get_rank:[15,17],get_weights_dict:26,getcwd:17,gfortran:21,gist_ncar:17,give:[11,17,22],given:[7,8,11,15,17,19],global:[15,17,22],gml:17,goe:[15,26,27],good:22,gov:16,gradient:[11,22],great:[3,15,22],great_circl:[3,26],greater:19,grid1:17,grid2:17,grid:[0,1,2,3,7,8,9,11,12,16,18,20,21,22,25,26,27],grid_create_from_coordin:17,grid_create_from_coordinates_3d:17,grid_create_from_coordinates_period:17,grid_imask:15,griditem:[15,16,17,19,20],gridlat:[15,17],gridlatcorn:15,gridlon:[15,17],gridloncorn:15,gridspec:[1,17,19,22],gridxcent:17,gridxcoord:17,gridxcorn:17,gridycent:17,gridycoord:17,gridycorn:17,gridzcent:17,gridzcorn:17,guid:21,hand:15,handl:[15,17,22,26,27],happen:[26,27],has:[15,17,19,22],has_corn:19,have:[15,17,18,19,25,26],height:23,held:15,hello:[15,20],hello_world:15,help:15,helper:20,here:[7,9,15,21],hex:5,hexagon:15,hexahedr:5,hexahedron:15,high:15,higher:[11,15,22,26],highli:15,hold:[6,15,17,25,26,27],hole:9,home:[15,21,22],how:[0,3,4,15,17,18,21,22,26],howev:[9,11,15,17,26],http:16,ident:15,identifi:[15,23],ids:[15,25],ignor:[14,15,17,22,26],ignore_degener:26,impli:15,importerror:17,imshow:17,inappropri:15,includ:[11,15,21,22,23],ind:17,index:[17,18,19,20,26],indic:[0,1,9,13,14,15,26,27],individu:[11,15,18,19,21,23,25],influenc:[3,15,26],info:15,inform:[15,18,19,21,22,23,24,25,26,27],initi:[10,15,18,20,21,24,26],initialize_field_grid_period:17,input:[11,15,25,26],instal:[17,20],instanc:19,instead:[9,15],instruct:21,int32:[13,15,17,26],int64:13,integ:[13,15,19,25],integr:[11,15,21,22],interfac:[15,18,20,21,22],intern:[15,19,23],interpol:[3,9,11,15,16,17,22,26,27],interpret:[0,15],intervent:15,invok:15,involv:[2,15,17],irregularli:15,is_spher:[15,19],isdir:17,isfil:17,isn:15,issu:[4,17,21,22],item:[2,15,18,19],its:[11,15,18],itself:8,job:15,join:17,juli:17,just:7,kei:[15,23,26],kind:[2,13,15,22],known:[15,22,25],lacc:16,lambda:17,land:[15,22],lanl:16,lapack:21,larg:15,larger:[11,25],last:[16,18],lat:[15,17,19,23,25],lat_corn:[15,17],lat_par:17,latest:22,latitud:[0,15,17,19],latlon:17,latm:[15,17],latm_corn:15,layer:15,layout:[10,15],lbx:17,lby:17,lbz:17,leak:26,least:[15,18,22],len:[15,17],length:19,less:[11,15,19],level:[15,21],lib:21,librari:[13,15,21,23,25],lie:[3,9],lifetim:15,like:[11,15,17,21,22],likewis:15,limit:20,line:[3,15,22,26],line_typ:26,linear:[11,15,22],linetyp:[15,16,20,26],link:[15,20],linspac:15,linux:21,list:[15,17,18,19,21,23,25,26],littl:15,ll1deg_grid:17,ll2:17,local:[15,19],local_pet:[15,17,24],locat:[6,11,12,15,17,18,19,21,23,25],location_count:23,locstream:[16,18,20,22,26,27],locstream_util:17,log:[4,17,20,24],logfil:24,logic:[15,19,22],logkind:[15,16,20],lon:[15,17,19,23,25],lon_corn:[15,17],lon_par:17,longer:25,longitud:[0,15,17,19],lonm:[15,17],lonm_corn:15,loop:26,lot:21,low:15,lower:[15,17,18,19,23],lower_bound:[17,18,19,23],machin:[15,17,21],made:15,mai:[1,2,9,11,15,19,22,25,26,27],main:[11,17],maintain:15,make:[3,15,17,23,25,26],makedir:17,manag:[16,17,20,21,26,27],mani:[15,19,21,22,26],manifold:[15,25],manner:[15,17,18,19,23,25,26,27],manual:[15,21,25],map:[0,9,10,11,18,19,22,26],mark:15,mask:[2,17,19,20,22,23,25,26],mask_flag:25,mask_valu:17,mass:[20,26],matplotlib:17,matrix:[11,14,17,22],max:17,max_index:[17,19],maximum:19,maxproc:[15,17],mean:[15,17,18],meanrelerr:17,memori:[15,17,18,19,21,23,25,26,27],mesh:[1,5,6,7,11,16,18,20,21,22,26,27],mesh_create_5:17,mesh_create_5_parallel:17,mesh_util:17,meshelemtyp:[15,16,17,20,25],meshgrid:[15,17],meshloc:[15,16,17,18,20,25],meshnam:25,messag:[4,15],metadata:[15,18,25],method:[0,3,11,12,15,22,24,26],might:15,min:17,minimum:19,mismatch:[9,23],miss:19,missing_valu:19,mix:[15,23],mode:15,model:[15,22],modif:17,modifi:17,modul:20,monopol:[8,19],more:[11,15,18,19,22,23,25,26,27],most:[15,19],move:25,mpas_uniform_10242_dual_counterclockwis:17,mpi4pi:[15,17,21],mpi:[20,21],mpich:[15,17],mpirun:20,mpiuni:18,much:[4,11,15],mul:17,multi:[4,15,21],multipl:[4,11,15,18,19,22],must:[15,17,18,21,23,25],name:[17,18,19,20,21,23,24,25,27],nativ:15,natur:15,ndarrai:[18,25,26],ndbound:[15,17,18],nearest:[11,15,22],nearest_dto:[11,15,17],nearest_idavg:26,nearest_stod:[11,15],nearli:15,necessari:[15,17],need:[11,15,17,18,21,22,23,25],neighbor:[11,22],nesii:[],netcdf:[1,15,18,19,21,22,25,26],next:9,nice:22,nightli:21,nodal:15,node:[6,9,15,17,18,25],node_coord:[15,25],node_count:25,node_id:[15,25],node_mask:15,node_own:[15,25],nodecoord:[15,17],nodeid:[15,17],nodeown:[15,17],non:15,none:[4,8,9,12,17,18,19,23,24,25,26,27],norm_typ:26,normal:[7,15,26],normtyp:[15,16,20,26],nose:21,nosetest:21,note:[15,17,18,22,25],novemb:17,now:[9,15],npntavg:9,num_elem:[15,17],num_nod:[15,17],num_peri_dim:[15,17,19],number:[9,15,17,18,19,21,23,24,25,26],numer:26,numpi:[13,17,19,20,21,25,26],object:[1,10,17,18,19,20,21,22,23,24,25,26,27],observ:[15,22,23],occasion:17,occur:[8,9,19,26],ocean:15,oceans11:16,offlin:21,onc:15,one:[4,11,15,17,18,19,22,26],ongo:25,onli:[3,11,15,17,18,19,21,24,25,26,27],onto:[9,18],openmpi:[15,17,21],oper:[10,15,17,19,22,25,26,27],oppos:10,option:[3,7,9,15,17,18,19,21,22,23,25,26,27],order:[0,11,17,20,22,25],origin:[10,15,22,24],other:[0,2,7,15,22,23,26],otherwis:19,out:[9,15,22,26,27],outer:17,outlin:[19,25],output:[15,17,24,26],outsid:22,over:[19,26],overlap:[7,11,22],overview:20,overwritten:[26,27],own:[15,25],owner:15,ownership:15,packag:[15,16,20,22],pad:15,page:[15,20,21,22],pair:15,parallel:[20,21,22],param:[17,18],paramet:[9,15,18,19,23,24,25,26,27],parametr:[5,15,17,25],parametric_dim:[15,17,25],parent:[15,17],part:[7,15,25],particip:15,particular:[15,21,23],pass:15,patch:[11,15,22],path:[3,17,21,22,26],per:[4,15,18],perfect:15,perform:[15,19],perimet:15,period:[19,20],periodic_dim:[15,17,19],persist:15,pet:[4,15,17,19,24],pet_count:[15,17,24],physic:[15,18,19],piec:[15,17],place:[9,15,22],plane:[3,15],platform:[21,22],pleas:[18,19,21,22,23,25,26,27],plot:17,plt:17,point:[3,9,11,14,15,22,23,25,26],pointer:[17,21],polar:15,pole:[8,9,19,22,26],pole_dim:[15,17,19],pole_kind:19,pole_method:26,polekind:[15,16,19,20],polemethod:[15,16,20,26],polygon:15,polynomi:[11,22],portion:[10,15],posit:[12,15,23],possibl:15,post:15,postcondit:17,power:15,precondit:17,prefix:21,present:15,preserv:[11,22],print:[15,17],prior:[15,24],probabl:[15,17],problem:22,proce:26,process:[15,17,22],processor:[17,21,25],prod:17,produc:[7,11,22,26],product:19,program:[15,17,21],project:[9,22],propag:15,properli:[15,24],properti:[15,18,19,23,24,25],proport:22,provid:[11,15,19,22,25],purpos:11,put:15,pyplot:17,python:[15,18,19,20,21,22,23,24,25,26],pythonpath:21,quad:[5,15,17],quadrilater:[5,15],qualiti:22,quantiti:[3,15],queri:15,question:[21,22],radian:[0,15,17],radiu:[0,15,23],rais:[15,17,26],rang:[9,15,17],rank:[15,17,18,19,23,24,25],ravel:17,read:[15,18,19,20,22,26,27],real:13,receiv:[11,15],recogn:23,recommend:15,recoveri:[11,22],rectangular:[15,19,22],reduc:[17,26],reduce_v:17,refer:[0,2,15,18,20,21,26],referenc:[15,18,19,21,23,25],reg_decomp:19,regdecompptil:19,region:[15,16,17,19,20,22,25,26,27],regist:24,regress:21,regrid:[0,2,3,7,9,10,11,16,19,20,21,22,25,27],regrid_from_fil:21,regrid_method:[17,26],regrid_pole_npoint:26,regridfromfil:[15,16,17,20],regrididng:25,regridmethod:[15,16,17,20,26],regridpolenpnt:9,regridsrc2dst:17,regular:23,rel:[17,21],relat:[21,22],relationship:[15,18],releas:[16,18,19,22,23,25,26,27],relerr:17,remain:19,remap:[16,22],rememb:[15,26],remov:17,replic:18,repositori:17,repres:[2,15,18,19,22,23,25,26,27],represent:15,requir:[15,18,19,20,25,26,27],reshap:17,resourc:[19,20],respect:[14,15,26],rest:9,restrict:15,result:[11,14,15,17,22,23,24,26,27],retain:10,retriev:[12,15,17,21,24,26,27],reus:15,rh_filenam:[26,27],right:17,robust:22,root:17,routehandl:[11,26,27],routin:[13,15],row:[9,26],row_dst:26,run:[15,20,21],run_regrid:17,runtim:24,safe:[18,19,23,25,26,27],same:[15,18,19,21,25],scalabl:[15,22],scope:[26,27],scrip:[1,16,17,19,22,25],script:[15,17],search:20,second:[11,12,15,19,22,23,26],section:15,see:[15,18,19,22,23,25,26,27],seem:17,seen:15,select:[7,10,17,26],send:17,sendobj:17,separ:22,sequenti:19,serial:[15,20,21],set:[5,9,12,15,17,19,21,22,23,24,25,26],set_titl:17,set_xbound:17,set_xlabel:17,set_ybound:17,set_ylabel:17,setenv:21,setup:21,shallow:[18,19,23,25,26,27],shape:[3,15,17,25,26],share:[18,21],shell:21,shortcut:15,shortest:3,should:[4,10,15,17,25,26],show:17,shutdown:[15,17],side:[5,15,19],signific:15,similar:15,similarli:15,simpl:22,simplest:15,simpli:21,simplif:15,simplifi:15,sin:17,sinc:15,singl:[1,15,18,19,21,22,25],singleton:24,site_packag:21,size:[9,15,17,19,23,25],size_own:25,skip:26,skiptest:[],slats_par:17,slice:20,slightli:[15,17],slons_par:17,small:[15,21,25],smaller:[15,25],smooth:15,smoother:[11,22],snippet:17,so_omon_giss:17,softwar:[16,22],solut:17,some:[2,9,15,19,21],sourc:[7,9,11,15,17,20,22,25,26,27],space:[3,15,19,22,25],spars:[14,22],spatial:[17,20,25],spatial_dim:[15,17,25],spawn:20,special:15,specif:[1,15,21,25],specifi:[3,4,10,11,12,15,17,18,19,21,23,25,26,27],sph_deg:[0,15,17,19,23,25],sph_rad:[0,15,17,23],sphere:[3,9,15,19,21,22,25,26],spheric:[0,16,19,22],squar:[15,22,25],src:21,src_file:[],src_file_typ:[],src_frac_field:[17,26],src_mask_valu:[15,17,26],srcfield:[17,26,27],srcfracfield:17,srcgrid:17,srcgridcoordlat:17,srcgridcoordlon:17,stage:22,stagger:[11,12,17,18,19],staggerloc:[15,16,17,18,19,20],stand:17,standard:[15,21,23],start:[15,17],start_work:17,statu:22,stencil:11,step:[15,19,25],still:[9,15],store:[15,18,19,23,26],str:[15,18,19,23,25],straight:[3,22],strategi:15,stream:[22,23],stress:21,string:[17,25,26,27],structur:[1,15,22],style:17,subplots_adjust:17,subprocess:17,subsequ:24,subset:21,succe:21,success:15,successfulli:17,suffici:[15,19],suitabl:22,sum:[11,17,19,25],support:[15,18,19,21,22,25],suptitl:17,sure:17,surfac:[3,15,25,26],surround:[9,11],symmetr:15,syntax:23,sys:[15,17],system:[0,15,17,19,22,23,25],tabl:15,take:[11,14,15,21,22,26],target:21,task:15,techniqu:15,teeth:9,tell:[12,17,19,25],temperatur:18,tempor:15,term:[11,15,25],test:21,test_api:21,test_exampl:21,test_examples_parallel:21,test_field_regrid:21,test_parallel:21,test_regrid:21,test_regrid_from_fil:21,test_regrid_from_file_dryrun:21,test_regrid_from_file_parallel:21,testregrid:21,tetra:5,tetrahedr:5,tetrahedra:15,tetrahedron:15,than:[11,15,19,22,25,26],thei:[15,23],them:[15,17,21],therefor:[15,19],thi:[0,1,2,3,4,7,8,9,10,11,13,14,15,17,18,19,21,22,23,24,25,26,27],thin:15,thing:15,third:15,those:[15,18,19,23,25,26],though:26,thought:[15,23],thread:15,three:15,through:[3,15,19,21,22],thu:[11,15],tight:26,tile:[1,19,21,22],tiles:19,time:[15,18,21,24,25],timeslic:[17,18],todo:17,togeth:15,toler:17,top:[9,12,15,21],topolog:[15,19,25],total:[10,15,19,24,26,27],trac:16,transform:22,translat:15,transpar:15,treat:26,tri:[5,15,17],triangl:[9,15],triangular:5,trigger:15,tupe:26,tupl:[18,25,26],turn:[3,26],tutori:[15,20],two:[3,15,17,19,22,25,26,27],type:[0,3,5,7,8,9,13,15,17,18,19,23,25,26],typekind:[15,16,17,18,19,20],typic:11,ubi:17,ubx:17,ubz:17,ucar:[21,22],ugrid:[1,22,25],uncom:17,unconnect:22,underli:[13,15,18,19,23,25,26,27],underneath:22,ungrid:18,uniform:17,uninitv:17,uniqu:15,unit:15,unittest:[],unmap:[14,15,22,26],unmapped_act:[17,26],unmappedact:[15,16,17,20,26],unmask:15,unstructur:[1,15,17,22,25],until:15,unus:15,updat:15,upon:[15,18],upper:[17,18,19,23],upper_bound:[17,18,19,23],usag:[15,17],use:[10,11,15,17,19,21,25,26],used:[2,4,5,6,7,13,14,15,17,18,19,22,23,25,26,27],useful:[0,9,15,22],user:[0,7,15,18,19,21,24,26],uses:[15,17,22],using:[0,9,15,17,18,19,21,22,23,24,26],util:[15,17,22],valid:[5,15,20,23],valu:[0,9,10,11,15,17,18,19,21,22,23,25,26,27],valueerror:[15,17],valuefield:17,vari:15,variabl:[15,17,18,19,21,25],variant:22,varieti:[15,22],variou:[10,15,22],varnam:[15,19,25],vector:9,veri:15,versa:22,version:[11,21,22],vertex:[15,18,25],vertic:[3,12],via:26,vice:22,virtual:15,visual:22,vmax:17,vmin:17,vtk:1,wai:[15,19,25],wave:17,weather:22,weight:[3,7,11,15,20,22,26,27],welcom:20,well:15,were:15,what:14,when:[3,7,12,15,18,21,22,24,26,27],where:[12,15,17,19,26],wherebi:15,whether:[15,17,19,24,25],which:[3,5,7,9,11,15,17,18,19,22,24,25,26,27],whole:15,whose:15,wide:22,withaux:[],within:[15,23],without:[15,17,18,21,26],won:[9,15],word:[7,15],work:[11,15,17,21],worker:[15,17],world:[15,20,23],would:[3,15,25],wrap:21,wrapper:[15,18,19,23,25],write:20,written:21,x_par:17,xcoord:17,xcoordin:17,xcorner:17,xctfield:17,y_par:17,ycoord:17,ycoordin:17,ycorner:17,z_par:17,zcoord:17,zcoordin:17,zcorner:17,zero:[9,15,17,26,27],zero_region:[17,26,27]},titles:["CoordSys","FileFormat","GridItem","LineType","LogKind","MeshElemType","MeshLoc","NormType","PoleKind","PoleMethod","Region","RegridMethod","StaggerLoc","TypeKind","UnmappedAction","API","Appendices","Tutorials","Field","Grid","Table of Contents","Installation","Overview","LocStream","Manager","Mesh","Regrid","RegridFromFile"],titleterms:{"class":[15,16],"function":17,"import":[21,22],Using:17,alloc:15,anaconda:21,analyt:17,api:[15,16],appendic:16,area:15,cell:15,code:21,collect:15,comput:17,constant:[15,16],content:20,coordin:15,coordsi:0,creat:[15,17],creation:15,dimens:15,discret:15,driver:17,element:17,esmfmesh:15,esmpi:[17,21],execut:15,field:[17,18],file:[15,17],fileformat:1,filemod:[],format:15,from:[15,17,21],garbag:15,gener:15,get:21,grid:[15,17,19],griditem:2,gridspec:15,hello:17,helper:17,index:15,initi:17,instal:21,limit:21,linetyp:3,link:22,locstream:[15,17,23],log:15,logkind:4,manag:[15,24],mask:15,mass:17,mesh:[15,17,25],meshelemtyp:5,meshloc:6,mpi:[15,17],mpirun:15,name:[15,16],normtyp:7,numpi:15,object:15,order:15,overview:22,packag:21,parallel:[15,17],period:[15,17],pole:15,polekind:8,polemethod:9,python:17,read:17,refer:16,region:10,regrid:[15,17,26],regridfromfil:27,regridmethod:11,requir:21,resourc:15,run:17,scrip:15,serial:17,slice:15,sourc:21,spatial:15,spawn:[15,17],spheric:15,stagger:15,staggerloc:12,tabl:20,tutori:17,typekind:13,ugrid:15,unmappedact:14,valid:21,weight:17,world:17,write:17}})