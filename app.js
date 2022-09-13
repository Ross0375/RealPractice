const app = Vue.createApp({
    data: function () {
        return {
            songs: songs,
            input: "",
            selectedSongs: [],
            searchType: ["Title", "Composer"],
            selection: "Title"
        }
    },
    computed: {
        filteredSongs: function() {
            return this.songs.filter(song =>
              song.Title.toLowerCase().includes(this.input.toLowerCase())
            );
        }
    },
    methods: {
        addSong(selectedPage, index) {
            const selectedSong = this.songs.find(song => song.PageNumber === selectedPage)
            selectedSong.Selected = true
            this.selectedSongs.push(selectedSong)
            console.log(index)
        },
        delSong(selectedPage, index) {
            console.log(index)
            const selectedSong = this.songs.find(song => song.PageNumber === selectedPage)
            selectedSong.Selected = false
            this.selectedSongs.splice(index, 1)

        }
    }
})

const vm = app.mount('#app')