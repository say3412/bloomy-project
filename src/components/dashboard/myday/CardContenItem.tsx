import React, { useState } from 'react';
import { CardContent, Stack, Tooltip, IconButton, FormGroup, TextField, FormControlLabel, Checkbox, Typography, Chip, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import DoneIcon from '@mui/icons-material/Done';
import RemoveIcon from '@mui/icons-material/Remove';
import dayjs from 'dayjs';

interface CardContentItemProps {
  contents: any[];
  checkDone: (id: string) => void;
  addHandler: (content: string, startDate?: string, endDate?: string) => void;
  removeHandler: (id: string) => void;
  isHabit?: boolean;
}

export default function CardContentItem({ 
  contents, 
  checkDone, 
  addHandler, 
  removeHandler, 
  isHabit = false 
}: CardContentItemProps) {
  const [isAdding, setIsAdding] = useState(false); // 입력창 활성화 여부
  const [inputValue, setInputValue] = useState(''); // 입력창 텍스트
  const [selectedIds, setSelectedIds] = useState<string[]>([]); // 체크박스 선택 리스트
  const [duration, setDuration] = useState<'14days' | '30days' | '100days'>('14days'); // 습관 기간 선택

  // 1. 체크박스 토글 핸들러
  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 2. 선택된 항목들 일괄 완료 처리 핸들러
  const handleBatchDone = () => {
    selectedIds.forEach((id) => {
      checkDone(id);
    });
    setSelectedIds([]); // 처리 후 선택 해제
  };

  // 3. 선택된 항목들 일괄 삭제 처리 핸들러
  const handleBatchRemove = () => {
    setIsAdding(false);
    selectedIds.forEach((id) => {
      removeHandler(id);
    });
    setSelectedIds([]); // 처리 후 선택 해제
  };

  // 4. 저장 버튼 클릭 핸들러
  const handleSaveClick = () => {
    if (inputValue.trim()) {
      if (isHabit) {
        // 습관일 경우 시작일(오늘)과 종료일(기간 합산)을 자동 계산해서 전달
        const startDate = dayjs().format('YYYY-MM-DD');
        const endDate = dayjs()
          .add(duration === '14days' ? 14 : duration === '30days' ? 30 : 100, 'day')
          .format('YYYY-MM-DD');
        
        addHandler(inputValue, startDate, endDate);
      } else {
        // 일반 일정일 경우 기존처럼 텍스트만 전달
        addHandler(inputValue);
      }
      setInputValue('');
      setIsAdding(false);
    }
  };

  return (
    <CardContent sx={{ pt: 1 }}>
      <Stack spacing={2}>
        
        {/* 상단 컨트롤 버튼 그룹 */}
        <Stack direction='row' spacing={1} justifyContent='center'>
          {/* 추가/저장 버튼 분기 */}
          {!isAdding ? (
            <Tooltip title="추가">
              <IconButton onClick={() => setIsAdding(true)} color="primary">
                <AddIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="저장">
              <IconButton onClick={handleSaveClick} color="success">
                <SaveIcon />
              </IconButton>
            </Tooltip>
          )}

          {/* 완료 처리 버튼 (MUI Tooltip 오류 방지를 위해 span으로 감쌈) */}
          <Tooltip title={selectedIds.length === 0 ? "선택된 항목이 없습니다" : "완료 처리"}>
            <span style={{ display: 'inline-block' }}>
              <IconButton 
                onClick={handleBatchDone} 
                color="secondary" 
                disabled={selectedIds.length === 0}
              >
                <DoneIcon />
              </IconButton>
            </span>
          </Tooltip>

          {/* 삭제 버튼 (MUI Tooltip 오류 방지를 위해 span으로 감쌈) */}
          <Tooltip title={selectedIds.length === 0 ? "선택된 항목이 없습니다" : "삭제"}>
            <span style={{ display: 'inline-block' }}>
              <IconButton 
                onClick={handleBatchRemove} 
                color="error" 
                disabled={selectedIds.length === 0}
              >
                <RemoveIcon />
              </IconButton>
            </span>
          </Tooltip>
        </Stack>

        {/* 리스트 및 입력 폼 영역 */}
        <FormGroup>
          {/* 입력창 활성화 시 텍스트필드 + 습관일 경우 기간 칩 스르륵 노출 */}
          {isAdding && (
            <Stack spacing={1} sx={{ mb: 2, px: 1 }}>
              <TextField
                fullWidth
                variant="standard"
                placeholder={isHabit ? "새로운 습관 입력..." : "내용 입력..."}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && handleSaveClick()}
              />
              
              {/* 습관 전용 기간 선택 숏컷 칩 */}
              {isHabit && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 0.5 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ mr: 0.5 }}>
                    목표 기간:
                  </Typography>
                  <Chip 
                    label="2주일" 
                    size="small" 
                    variant={duration === '14days' ? 'filled' : 'outlined'}
                    color="primary"
                    onClick={() => setDuration('14days')}
                    sx={{ fontSize: '0.7rem', height: '22px', borderRadius: '6px' }}
                  />
                  <Chip 
                    label="30일" 
                    size="small" 
                    variant={duration === '30days' ? 'filled' : 'outlined'}
                    color="primary"
                    onClick={() => setDuration('30days')}
                    sx={{ fontSize: '0.7rem', height: '22px', borderRadius: '6px' }}
                  />
                  <Chip 
                    label="100일" 
                    size="small" 
                    variant={duration === '100days' ? 'filled' : 'outlined'}
                    color="primary"
                    onClick={() => setDuration('100days')}
                    sx={{ fontSize: '0.7rem', height: '22px', borderRadius: '6px' }}
                  />
                </Box>
              )}
            </Stack>
          )}

          {/* 저장된 콘텐츠 목록 출력 */}
          {contents.map((con) => (
            <FormControlLabel
              key={con.id}
              control={
                <Checkbox
                  checked={selectedIds.includes(con.id)}
                  onChange={() => handleToggleSelect(con.id)}
                  sx={{
                    color: con.done ? 'success.main' : 'default',
                    '&.Mui-checked': {
                      color: 'primary.main',
                    },
                  }}
                />
              }
              label={
                <Typography sx={{
                  fontWeight: 600,
                  textDecoration: con.done ? 'line-through' : 'none',
                  color: con.done ? 'text.disabled' : 'text.primary'
                }}>
                  {con.content}
                </Typography>
              }
            />
          ))}
        </FormGroup>
      </Stack>
    </CardContent>
  );
}