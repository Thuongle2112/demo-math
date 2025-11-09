import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeView: 'overview', // overview | examTypeSelection | practiceSelection | bookResources
    selectedProvince: 'Nam Định',
    selectedExam: null,
    selectedExamType: null, // 'so' | 'phong' | 'chuyen' | 'truong'
    urlParams: { type: null, grade: null },
    submittedTimeSpent: null
};

const onThiSlice = createSlice({
    name: 'onThi',
    initialState,
    reducers: {
        setActiveView(state, action) { state.activeView = action.payload; },
        setSelectedProvince(state, action) { state.selectedProvince = action.payload; },
        setSelectedExam(state, action) { state.selectedExam = action.payload; },
        setSelectedExamType(state, action) { state.selectedExamType = action.payload; },
        setUrlParams(state, action) { state.urlParams = action.payload; },
        setSubmittedTimeSpent(state, action) { state.submittedTimeSpent = action.payload; },
        resetSelection(state) {
            state.selectedExam = null;
            state.selectedExamType = null;
        }
    }
});

export const {
    setActiveView,
    setSelectedProvince,
    setSelectedExam,
    setSelectedExamType,
    setUrlParams,
    setSubmittedTimeSpent,
    resetSelection
} = onThiSlice.actions;

export default onThiSlice.reducer;