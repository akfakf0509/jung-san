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

const store = useStore();
const { members, paymentItems } = storeToRefs(store);

const memberOptions = computed(() => {
  return members.value.map((member) => member.name);
});
const selectedMembers = ref<string[]>();
watch(memberOptions, () => {
  selectedMembers.value = [...memberOptions.value];
});

const typeOptions = [
  { value: "divide", label: "인원 수로 나누기" },
  { value: "plus", label: "고정 값으로 계산하기" },
];
interface State {
  member: string[];
  name: string;
  price: number;
  type: "divide" | "plus";
}
const state = reactive<State>({
  member: [...memberOptions.value],
  name: "",
  price: 0,
  type: "divide",
});
const validate = (state: State): FormError[] => {
  const errors: FormError[] = [];

  if (!state.name) errors.push({ message: "필수 값이에요", path: "name" });
  return errors;
};

function handleSubmit() {
  paymentItems.value.push({
    member: [...state.member],
    name: state.name,
    price: state.price,
    type: state.type,
  });
  state.member = [...memberOptions.value];
  state.name = "";
  state.price = 0;
  state.type = "divide";
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
        <UFormGroup label="인원" name="members" class="pb-2">
          <USelectMenu
            v-model="selectedMembers"
            :options="memberOptions"
            multiple
          />
        </UFormGroup>
        <UDivider class="my-2" />
        <UFormGroup label="타입" name="type" class="pb-2">
          <USelect v-model="state.type" :options="typeOptions" />
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
