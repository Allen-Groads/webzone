$.getJSON( 'https://logon.rp-wow.ru/api/checkmails', function( data ) {
	  
		new Vue({
			el: '#table',
			data () {
				return {
					keyword: '',
					dataArray: data,
					fields: [
						{key: 'id', label: 'Чек', sortable: true},
						{key: 'date', label: 'Дата', sortable: true},
						{key: 'sender', label: 'Отправитель', sortable: false},
						{key: 'receiver', label: 'Тип', sortable: false},
						{key: 'money', label: 'Монеты', sortable: false},
						{key: 'subject', label: 'Название', sortable: false},
						{key: 'body', label: 'Описание', sortable: false},
						{key: 'status', label: 'Статус', sortable: false},
						{key: 'gmName', label: 'ГМ', sortable: false}
					],
					totalRows: 1,
					currentPage: 1,
					perPage: 40,
					pageOptions: [40, 80, 120],
					filter: null
				}
			},
			computed: {
				items () {
					return this.keyword
						? this.dataArray.filter(item => item.sender.includes(this.keyword)  || item.status.includes(this.keyword))
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
