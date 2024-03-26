<script setup lang="ts">
import type { FormError } from "#ui/types";

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

interface State {
  name: string;
}
const state = reactive<State>({
  name: "",
});
const validate = (state: State): FormError[] => {
  const errors: FormError[] = [];
  if (!state.name) errors.push({ message: "필수 값이에요", path: "name" });
  return errors;
};

const store = useStore();
const { members } = storeToRefs(store);
function handleSubmit() {
  members.value.push({ name: state.name });
  state.name = "";
}
</script>

<template>
  <UModal v-model="openedModel">
    <UForm :state="state" :validate="validate" @submit="handleSubmit()">
      <UCard>
        <template #header>
          <div class="flex items-center justify-between">
            <h3
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              인원 추가
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
        <UFormGroup label="이름" name="name">
          <UInput v-model="state.name" autocomplete="off" />
        </UFormGroup>
        <template #footer>
          <UButton type="submit" label="추가" />
        </template>
      </UCard>
    </UForm>
  </UModal>
</template>
