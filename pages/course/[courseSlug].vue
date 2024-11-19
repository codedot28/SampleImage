<template>

    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{ course?.title }}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{ course?.rating }}</span>
          </span>
          <span> {{ course?.reviewsCount }}개의 수강평 </span>
          <span>&middot;</span>
          <span>{{ course?.studentCount }}명의 수강생</span>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video" />
      </div>
     
      <p class="q-mt-lg text-grey-8 q-my-sm" style="white-space: pre-wrap;">{{ course?.content }}</p>
      <q-separator class="q-mb-lg" />
    <q-form class="q-gutter-y-md">
      <q-btn
        label="수강완료"
        class="full-width"
        color="green"
        unelevated
        :outline="completed ? false : true"
        :icon="completed ? 'check' : undefined"
        @click="completed = !completed"
      />
      <q-input
        v-model="memo"
        type="textarea"
        outlined
        dense
        placeholder="메모를 작성해주세요."
        rows="3"
				autogrow
      />
    </q-form>

      <template #footer>
        <ClientOnly>
        <q-btn
          v-if="prevCourse"
          label="이전"
          color="primary"
          unelevated
           @click="movePage(prevCourse.path)"
        />
        <q-space />
        <q-btn
          v-if="nextCourse"
          label="다음"
          color="primary"
          unelevated
          @click="movePage(nextCourse.path)"
        />
      </ClientOnly>
      </template>
    </AppCard>

</template>

<script setup lang="ts">
const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course, prevCourse, nextCourse } = useCourse(courseSlug);
console.log('[courseSlug].vue 컴포넌트 setup hooks');
definePageMeta({
  key: (route) => route.fullPath,
  title: 'My home page',
  pageType:'',
  keepalive: true,
  alias: ['/lecture/:courseSlug'],
});

const memo = ref('');
const completed = ref(false);

const movePage = async (path:string) => {
  await navigateTo(path);
}
</script>

<style scoped></style>