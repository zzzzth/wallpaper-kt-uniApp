import {ref} from 'vue'

export const useStates = () => {
	const stats = ref({
		moment:99,
		image:12,
		video:3,
		text:20,
		updateTime : Date.now()
	})
	
	return {stats}
}