$.getJSON( 'https://logon.rp-wow.ru/api/Levels', function( data ) {
	  
		new Vue({
			el: '#table',
			data () {
				return {
					keyword: '',
					dataArray: data,
					fields: [
						{key: 'date', label: 'Дата', sortable: true},
						{key: 'type', label: 'Тип', sortable: true},
						{key: 'charName', label: 'Имя персонажа', sortable: true},
						{key: 'gmName', label: 'Имя ГМа', sortable: true},
						{key: 'oldLevel', label: 'Старый уровень', sortable: false},
						{key: 'addedLevel', label: 'Новый уровень', sortable: false},
						{key: 'comment', label: 'Комментарий', sortable: false}
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
						? this.dataArray.filter(item => item.date.includes(this.keyword)  || item.charName.includes(this.keyword))
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
		
	});
	
