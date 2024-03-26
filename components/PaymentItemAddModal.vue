<script setup lang="ts">
interface Props {
  opened: boolean;
}
interface Emits {
  (e: "update:opened", value: boolean): void;
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const { opened } = toRefs(props);
const openedModel = computed({
  get: () => opened.value,
  set: (value) => emit("update:opened", value),
});

const store = useStore();
const { billParts } = storeToRefs(store);

interface State {
  name: string;
  price: number;
}
const state = reactive<State>({
  name: "",
  price: 0,
});

function handleSubmit() {
  billParts.value.push({
    name: state.name,
    price: state.price,
  });
  state.name = "";
  state.price = 0;
}
</script>

<template>
  <UModal v-model="openedModel">
    <UForm :state="state" @submit="handleSubmit()">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              결제 항목 추가
            </h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="openedModel = false"
            />
          </div>
        </template>
        <UFormGroup label="이름" name="name" class="pb-2">
          <UInput v-model="state.name" autocomplete="off" />
        </UFormGroup>
        <UFormGroup label="가격" name="price" class="pb-2">
          <UInput v-model="state.price" type="number" autocomplete="off" />
        </UFormGroup>
        <template #footer>
          <UButton type="submit" label="추가" />
        </template>
      </UCard>
    </UForm>
  </UModal>
</template>
