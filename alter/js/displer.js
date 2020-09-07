$.getJSON( './data6.json', function( data ) {
	  
		new Vue({
			el: '#table',
			data () {
				return {
					keyword: '',
					dataArray: data,
					fields: [
						{key: 'ID', label: 'ID', sortable: true},
						{key: 'Name_lang', label: 'NPC Name', sortable: true},
						{key: 'Title_lang', label: 'NPC Title', sortable: true},
						{key: 'DisplayID0', label: 'DisplayID[0]', sortable: true},
						{key: 'DisplayID1', label: 'DisplayID[1]', sortable: false},
						{key: 'DisplayID2', label: 'DisplayID[2]', sortable: false},
						{key: 'DisplayID3', label: 'DisplayID[3]', sortable: false}
					],
					totalRows: 1,
					currentPage: 1,
					perPage: 20,
					pageOptions: [20, 40, 50],
					filter: null
				}
			},
			computed: {
				items () {
					return this.keyword
						? this.dataArray.filter(item => item.ID.includes(this.keyword)  || item.Name_lang.includes(this.keyword))
						: this.dataArray
						
						this.totalRows = this.dataArray.length
				}
			},
			mounted() {
			  // Set the initial number of items
			  this.totalRows = this.items.length
			},
			methods: {
			  onFiltered(filteredItems) {
				// Trigger pagination to update the number of buttons/pages due to filtering
				this.totalRows = filteredItems.length
				this.currentPage = 1
			  }
			}
		});
		
	$('.disperer').on('click', function() {
		var disp = $(this).text();
		
		if ((disp == 0) || disp == false) {
			
		}else {


			var win, doc;

			window.open('./disp.html?disp='+disp, "hello", "width=350,height=400");




						
						 

					}
			
	});
	});
	
