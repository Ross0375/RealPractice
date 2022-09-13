const app = Vue.createApp({
    data: function () {
        return {
            songs: songs,
            input: "",
            selectedSongs: [{Title: "African Flower",
                AlternateTitle: "Petite Fleur Africaine",
                PageNumber: 10,
                Key: "Ebm",
                Composer: "Duke Ellington"}]
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
        addSong(selectedPage) {
            this.selectedSongs.push(this.songs[selectedPage])
            console.log(this.selectedSongs)
        }
    }
})

const vm = app.mount('#app')