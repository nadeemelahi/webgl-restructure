
new function(){

	ngl.init( "fsCanvas" ) ;

	var shader = ngl.shader_perspective;
	shader.compile();
	shader.load_program();


	var verts = [] , frags = []
		, vertices, fragments
	;

	// 
	//
	//
	// points
	var idx , jdx 
		, i_init = -20 , j_init = -20 
		, ilim = 20 , jlim = 20 
		, istep = 1 , jstep = 1 
	;

	var kdx 
		, k_init = -1 // [ -1 , 0.9 ]
		, klim = 0.9
		, kstep = 0.1
	;

	//verts = [  -1.0  ,  -1.0  ,  -1.0  ,  1.0 ];
	//frags = [ 1.0  ,  1.0  ,  1.0  ,  1.0 ];
	verts = []; frags = [];

	function set_xyz (  idx , jdx , kdx ){
		 
		verts.push ( idx ) ;
		verts.push ( jdx ) ;
		verts.push ( kdx ) ;
		verts.push ( 1 ) ;

		frags.push ( 1.0 );
		frags.push ( 1.0 );
		frags.push ( 1.0 );
		frags.push ( 1.0 );

	}

	kinit = 0; //near: -1, far: 0.9;
	kdx = kinit;
	for ( idx = i_init ; idx <= ilim ; idx += istep ) {
		for ( jdx = j_init; jdx <= jlim ; jdx += jstep ) {
			for ( kdx = k_init ; kdx <= klim ; kdx += kstep ) { 
				set_xyz( idx , jdx , kdx );
			}
		}
	}


	vertices = dataUtil.allocateFloats( verts );
	fragments = dataUtil.allocateFloats( frags );


	shader.load_vertices( vertices );
	shader.load_fragments( fragments );

	shader.load_pointSize("1.0");
	shader.draw_points();

	function animate(){

	}

	animate();


};
