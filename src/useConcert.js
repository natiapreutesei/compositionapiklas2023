import {computed, reactive, toRefs} from "vue";
export function useConcertObject(){
    const concert = reactive({
        amount: 5,
        deelnemers: ["Jeroen", "Joris", "Marieke"],
    });


    const places = computed(() => concert.amount - concert.deelnemers.length);
    function increment() {
        concert.amount++;
    }
    /*const amount = ref(5);
    const deelnemers = ref(["Jeroen", "Joris", "Marieke"]);*/
    return{
        ...toRefs(concert),
        places,
        increment
    }
}