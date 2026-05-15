import { useState } from 'react';
import {
  CardContent, Stack, IconButton, FormGroup, FormControlLabel,
  Checkbox, Typography, TextField, Tooltip
} from '@mui/material';
import {
  AddBox as AddIcon,
  SaveAs as SaveIcon,
  CheckCircleOutline as DoneIcon,
  DeleteOutline as RemoveIcon
} from '@mui/icons-material';
import useHabbitListContext from '@/hooks/useHabbitListContext';

export default function CardHabbitList() {
  const { contents, checkDone, addHabbit, removeHabbit } = useHabbitListContext();
  const [isAdding, setIsAdding] = useState(false); // 입력창 활성화 여부
  const [inputValue, setInputValue] = useState(''); // 입력창 텍스트
  const [selectedIds, setSelectedIds] = useState<string[]>([]); // 체크박스 선택

  const handleAddClick = () => {
    setIsAdding(true);
  };

  // 체크박스 선택/해제 핸들러
  const handleToggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 선택된 항목들 완료 처리
  const handleBatchDone = () => {
    selectedIds.forEach((id) => {
      // 이미 done이 false인 것만 true로 바꾸거나 토글
      checkDone(id);
    });
    setSelectedIds([]); // 처리 후 선택 해제
  };

  // 선택된 항목들 삭제 처리
  const handleBatchRemove = () => {
    selectedIds.forEach((id) => {
      removeHabbit(id);
    });
    setSelectedIds([]);
  };

  const handleSaveClick = () => {
    if (inputValue.trim()) {
      addHabbit(inputValue);
      setInputValue('');
      setIsAdding(false);
    }
  };

  return (
    <CardContent sx={{ pt: 1 }}>
      <Stack spacing={2}>
        <Stack direction='row' spacing={1} justifyContent='center'
          // sx={{
          //   '& .MuiIconButton-root': { color: 'grey.500' }, // 기본 회색
          //   '& .MuiIconButton-root:hover': { color: '#f48fb1' } // 활성/호버 시 핑크
          // }}
          >
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

          <Tooltip title="완료 처리">
            <IconButton onClick={handleBatchDone} color="secondary" disabled={selectedIds.length === 0}>
              <DoneIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="삭제">
            <IconButton onClick={handleBatchRemove} color="error" disabled={selectedIds.length === 0}>
              <RemoveIcon />
            </IconButton>
          </Tooltip>
        </Stack>

        <FormGroup>
          {isAdding && (
            <TextField
              fullWidth
              variant="standard"
              placeholder="내용 입력..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleSaveClick()}
              sx={{ mb: 1, px: 1 }}
            />
          )}

          {contents.map((con) => (
            <FormControlLabel
              key={con.id}
              control={
                <Checkbox
                  checked={selectedIds.includes(con.id)}
                  onChange={() => handleToggleSelect(con.id)}
                  // 박스 색깔이 채워지지 않게 하려면 'indeterminate' 느낌이나 
                  // 커스텀 아이콘을 쓸 수 있지만, 여기서는 기본 테두리 강조형을 사용
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
                  textDecoration: con.done ? 'line-through' : 'none', // 완료된 건 줄 긋기
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