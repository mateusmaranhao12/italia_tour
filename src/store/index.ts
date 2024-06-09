import { createStore } from 'vuex';

export interface Tour {

  id: number
  titulo: string
  texto: string
  imagem: string
  nome1?: string
  tour1?: string
  nome2?: string
  tour2?: string
  nome3?: string
  tour3?: string
  nome4?: string
  tour4?: string
  nome5?: string
  tour5?: string
  
}

interface State {
  tours: Tour[];
  selectedTour: Tour | null
}

const store = createStore<State>({
  state: {
    tours: [
      {
        id: 1,
        titulo: 'Roma',
        texto: 'Roma, o capital histórica da Itália',
        imagem: 'roma',
        nome1: 'Coliseu',
        tour1: 'roma1',
        nome2: 'Palatino',
        tour2: 'roma2',
        nome3: 'Fórum Romano',
        tour3: 'roma3',
        nome4: 'Panteão',
        tour4: 'roma4',
        nome5: 'Fontana di Trevi',
        tour5: 'roma5',
      },

      {
        id: 2,
        titulo: 'Milão',
        texto: 'Milão, a capital da moda e do design',
        imagem: 'milao',
        nome1: 'Duomo di Milano',
        tour1: 'milao1',
        nome2: 'Galleria Vittorio Emanuele II',
        tour2: 'milao2',
        nome3: 'Castelo Sforzesco',
        tour3: 'milao3',
        nome4: 'Brera',
        tour4: 'milao4',
        nome5: 'Navigli',
        tour5: 'milao5',
      },

      {
        id: 3,
        titulo: 'Veneza',
        texto: 'Veneza, a famosa Cidade da água',
        imagem: 'veneza',
        nome1: 'Basílica de Santa Maria della Salute',
        tour1: 'veneza1',
        nome2: 'Palácio Ducale',
        tour2: 'veneza2',
        nome3: 'Basílica de Santa Maria Gloriosa dei Frari',
        tour3: 'veneza3',
        nome4: 'Palácio de Ca Pesaro',
        tour4: 'veneza4',
        nome5: 'Passeio de Gôndola',
        tour5: 'veneza5',
      },

      {
        id: 4,
        titulo: 'Florença',
        texto: 'Florença, cidade onde abriga muitas obras de arte e arquitetura renascentistas',
        imagem: 'florenca',
        nome1: 'Cattedrale di Santa Maria del Fiore',
        tour1: 'florenca1',
        nome2: 'Basilica di Santa Maria Novella',
        tour2: 'florenca2',
        nome3: 'Piazza della Signoria',
        tour3: 'florenca3',
        nome4: 'Basílica de Santa Cruz',
        tour4: 'florenca4',
        nome5: 'Passeio de Gôndola',
        tour5: 'florenca5',
      },

    ],

    selectedTour: null,
  },

  mutations: {
    SET_SELECTED_TOUR(state, tour: Tour) {
      state.selectedTour = tour;
    },
  },

  actions: {
    selectTour({ commit }, tour: Tour) {
      commit('SET_SELECTED_TOUR', tour);
    },
  },

  getters: {
    allTours: (state) => state.tours,
    selectedTour: (state) => state.selectedTour,
  },
});

export default store;
